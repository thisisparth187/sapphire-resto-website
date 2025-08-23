import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// Route for contact form
app.post("/contact", async (req, res) => {
  const { name, email, service, message } = req.body;

  try {
    // Setup transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS, // app password
      },
    });

    // Send email to your inbox
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: "New Inquiry",
      text: `From: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    // Send auto-reply to the guest
    await transporter.sendMail({
      from: '"Sapphire Hotel" <yourgmail@gmail.com>',
      to: email,
      subject: "Thanks for contacting us!",
      html: `<!DOCTYPE html>
<html>
  <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color: #f9f9f9;">

    <div style="width:600px; margin:20px auto; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.1);">

      <!-- Header -->
      <div style="background:#1D1D1D; text-align:center; padding:20px;">
        <img src="https://share1.cloudhq-mkt3.net/f3d81ffb6043f1.png" alt="Hotel Logo" style="width:80px; border-radius:50%; display:block; margin:0 auto;">
        <h1 style="color:#fff; font-size:24px; margin:10px 0 0;">Sapphire Restaurant</h1>
      </div>

      <!-- Body -->
      <div style="padding:30px 20px; text-align:center;">
        <h2 style="color:#333; font-size:20px; margin-bottom:15px;">Thank You ${name} for Your ${service}</h2>
        <p style="color:#555; font-size:16px; line-height:1.6; margin:0 0 20px;">
          We have received your request and our executive will get back to you shortly. Meanwhile, explore our website for the latest offers and amenities.
        </p>
        <a href="https://github.com/thisisparth187/sapphire-resto-website" 
           style="display:inline-block; background-color:#c29d69; color:#ffffff; padding:12px 24px; border-radius:6px; text-decoration:none; font-size:16px; font-weight:bold; font-family:Arial, sans-serif;">
          Visit Our Website
        </a>
      </div>

      <!-- Footer -->
      <div style="background:#f4f4f4; color:#777; font-size:13px; text-align:center; padding:15px;">
        © 2025 Sapphire Hotel · 123 Luxury Street, Your City
      </div>

    </div>
  </body>
</html>


  `,
    });


    res.json({ success: true, message: "Mail sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Mail failed" });
  }
});

app.listen(5000, () => console.log("Backend running on port 5000"));
