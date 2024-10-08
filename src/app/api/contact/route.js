import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();
    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 465,
      secure: true,
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: user,
      to: user,
      subject: "New Message from your Website",
      text: `Name: ${name}\n\nEmail:${email}\n\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Nachricht erolgreich gesendet" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending mail:", error);
    return new NextResponse(
      { error: "Failed to send message:" },
      { status: 500 },
    );
  }
}
