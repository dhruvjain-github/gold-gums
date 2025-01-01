import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, contact, whatsapp, state, city, title, description } = req.body;

    // Creating a transporter using your email service
    const transporter = nodemailer.createTransport({
      service: "gmail", 
      auth: {
        user: "dhruvdkjk@gmail.com", 
        pass: "kbzz zjpa xsat fykw", 
      },
    });

    // Compose the email message
    const mailOptions = {
      from: email, 
      to: "dkjkin@gmail.com", 
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Contact: ${contact}
Whatsapp: ${whatsapp}
State: ${state}
City: ${city}
Title: ${title}
Description: ${description}
      `,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, message: "Failed to send email." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
