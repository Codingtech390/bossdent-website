import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import connectDB from "../lib/mongodb";
import Contact from "../server/models/Contact";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message, captchaToken } = body;

    // ── Step 1: reCAPTCHA server-side verification ──
    if (!captchaToken) {
      return NextResponse.json(
        { success: false, error: "CAPTCHA token missing" },
        { status: 400 }
      );
    }

    const verifyRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
      { method: "POST" }
    );
    const verifyData = await verifyRes.json();

    if (!verifyData.success) {
      return NextResponse.json(
        { success: false, error: "CAPTCHA verification failed" },
        { status: 400 }
      );
    }

    // ── Step 2: Save to MongoDB ──
    await connectDB();

    await Contact.create({ name, email, phone, subject, message });

    // ── Step 3: Send Email ──
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Bossdent Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}