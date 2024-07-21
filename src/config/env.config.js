import dotenv from "dotenv";
dotenv.config({ path: ".env" });

// server port and mode
const server = {
  serverPort: process.env.SERVER_PORT || 5000,
  serverMode: process.env.SERVER_MODE,
};

// mail services
const mailServices = {
  smtpMail: process.env.SMTP_MAIL,
  smtpPassword: process.env.SMTP_PASSWORD,
  smtpService: process.env.SMTP_SERVICE,
  smtpHost: process.env.SMTP_HOST,
  smtpPort: process.env.SMTP_PORT,
};


export const { serverMode, serverPort,serverBaseUrl } = server;
export const { smtpMail, smtpPassword, smtpService, smtpHost, smtpPort } = mailServices;