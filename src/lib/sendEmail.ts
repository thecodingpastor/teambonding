import Nodemailer from "nodemailer";
import { getErrorMessage } from "./getErrorMessage";

interface SendEmailProps {
  replyTo: string;
  html: string;
}

const SendEmail = async ({ html, replyTo }: SendEmailProps) => {
  // I send email from iep's email address to teambonding's zoho's email address
  const transporter = Nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    secure: false,
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    // This is to prevent email failure
    // tls: {
    //   rejectUnauthorized: false,
    // },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "booking@teambondingnigeria.com",
    subject: "Message from teambondingnigeria.com",
    html,
    replyTo,
  };

  try {
    const data = await transporter.sendMail(mailOptions);
    return data;
  } catch (err) {
    throw new Error(
      getErrorMessage(
        err ||
          "Could not send message at this moment, please try again later or reach us at booking@teambondingnigeria.com"
      )
    );
  }
};

export default SendEmail;
