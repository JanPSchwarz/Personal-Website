import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { token } = await request.json();

  if (!token) {
    return NextResponse.json(
      {
        error: "No reCaptcha token provided",
      },
      { status: 400 },
    );
  }

  try {
    const secretKey = process.env.RECAPTCHA_SECRET;

    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

    const resp = await axios.post(verificationUrl);
    const { success } = resp.data;

    if (success) {
      return NextResponse.json(
        {
          message: "reCaptcha validation successfull",
        },
        { status: 200 },
      );
    } else {
      return NextResponse.json(
        { error: "reCaptcha validation failed" },
        { status: 400 },
      );
    }
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
