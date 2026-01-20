import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
app.use(cors({ origin: process.env.CLIENT_ORIGIN || "http://localhost:5173" }));
app.use(express.json());

app.get("/health", (req, res) => res.json({ ok: true }));

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body || {};

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({ error: "name, email, message are required" });
    }
    if (!EMAIL_RE.test(email.trim())) {
      return res.status(400).json({ error: "Invalid email" });
    }

    const { SMTP_USER, SMTP_PASS, CONTACT_TO, SMTP_HOST, SMTP_PORT } = process.env;
    if (!SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
      return res.status(500).json({ error: "Email is not configured on the server." });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST || "smtp.gmail.com",
      port: Number(SMTP_PORT || 465),
      secure: true,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${SMTP_USER}>`,
      to: CONTACT_TO,
      replyTo: email.trim(),
      subject: `New portfolio message — ${name.trim()}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || ""}`,
        "",
        message,
      ].join("\n"),
    });

    return res.status(200).json({ ok: true, message: "Sent!" });
  } catch (err) {
    console.error("Contact email error:", err);
    return res.status(500).json({ error: "Failed to send message." });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
