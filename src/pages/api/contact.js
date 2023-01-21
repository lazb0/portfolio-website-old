import { google } from "googleapis";
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json();

  const dtoIn = req.body;

  if (!(dtoIn.name && dtoIn.email && dtoIn.message && dtoIn.token))
    return res.status(400).json({ error: "DtoIn not valid!" });

  const reCAPTCHAres = await fetch(
    "https://www.google.com/recaptcha/api/siteverify?secret=" +
      process.env.RECAPTCHA_SECRET_KEY +
      "&response=" +
      dtoIn.token,
    { method: "POST" }
  );

  const reCAPTCHAdata = await reCAPTCHAres.json();

  if (reCAPTCHAdata.success === false)
    return res.status(401).json({
      error: "ReCAPTCHA token was not successfully verified by google!",
    });

  const authOptions = {
    user: process.env.GOOGLE_USER,
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
  };

  const oauth2Client = new google.auth.OAuth2(
    authOptions.clientId,
    authOptions.clientSecret,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: authOptions.refreshToken,
  });

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      ...authOptions,
      accessToken: oauth2Client.refreshAccessToken(),
    },
  });

  try {
    transporter.verify();
    transporter.sendMail({
      from: process.env.EMAIL_SENDER,
      to: authOptions.user,
      subject: "New contact from " + dtoIn.name,
      text: dtoIn.message,
    });
    transporter.sendMail({
      from: process.env.EMAIL_SENDER,
      to: dtoIn.email,
      subject: "Thank you for contacting me!",
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: e });
  }

  transporter.close();

  res.status(200).json({ message: "I will be in touch soon!" });
}
