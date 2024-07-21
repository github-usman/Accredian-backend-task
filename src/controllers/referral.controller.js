import { prisma } from "../server.js";
import sendEmail from "../utils/send-email.js";

export const createReferralUser = async (req, res) => {
  const { referrerEmail, refereeEmail } = req.body;
  try {
    // Check if referrerEmail already exists
    const isReferrerEmailExist = await prisma.referral.findUnique({
      where: { referrerEmail },
    });

    // Check if refereeEmail already exists
    const isRefereeEmailExist = await prisma.referral.findUnique({
      where: { refereeEmail },
    });

    if (isReferrerEmailExist) {
      return res.status(409).json({
        message: "Referrer email already exists. Please enter a new one.",
        success: false,
      });
    }

    if (isRefereeEmailExist) {
      return res.status(409).json({
        message: "Referee email already exists. Please enter a new one.",
        success: false,
      });
    }

    // EMAIL SERVICE *************************** 

    const message = `
                 <div style="font-family: Arial, sans-serif; line-height: 1.5;">
                    <p>By clicking on the button below, you can proceed with your upcoming journey:</p>
                    <a href="https://accredian.com" style="display: inline-block; padding: 10px 20px; color: #fff; background-color: #007bff; text-decoration: none; border-radius: 5px; margin-bottom: 15px;">Checkout Your Benefits</a>
                    <p>If the above button does not work, use the following link:</p>
                    <p style="padding: 10px 20px; background-color: #FF0000; color: #fff; border-radius: 5px; margin-top: 15px;">If you have not requested this email, please ignore it.</p>
                  </div>
                `;

    await sendEmail({
      email: refereeEmail,
      subject: `Congratualtions | LEARN AS WELL AS EARN BY | ${req.body.referrerName}`,
      message,
    });

    // IF EMAIL has been SENT then save/create the data into database else Failed******************

    // Create/feed new referral data
    const newReferral = await prisma.referral.create({
      data: req.body,
    });

    res.status(201).json(newReferral);

  } catch (error) {
    console.error('Error creating referral:', error);
    if (error.code === 'P2002') {
      const uniqueField = error.meta.target[0];
      res.status(409).json({ message: `${uniqueField} already exists` });
    } else {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

// get all information
export const getAllReferralUsers = async (req, res) => {
  try {
    const referrals = await prisma.referral.findMany();
    res.status(200).json(referrals);
  } catch (error) {
    console.error('Error fetching referrals:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
