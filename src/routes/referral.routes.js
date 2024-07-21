import express from "express";
import { createReferralUser, getAllReferralUsers } from "../controllers/referral.controller.js";
import { validateReferralInput } from "../middleware/validateReferralInput.js";

const router = express.Router();

router.route('/referrals').post(validateReferralInput, createReferralUser).get(getAllReferralUsers);

export default router;
