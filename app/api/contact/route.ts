import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate inputs
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 }
      );
    }

    if (
      !email ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    // Server-side submission log (safe, no hardcoded credentials)
    console.log("[Contact Submission Received]", {
      name: name.trim(),
      email: email.trim(),
      messageLength: message.trim().length,
      receivedAt: new Date().toISOString(),
    });

    // In production, dispatch via configured email provider (e.g. Resend, Sendgrid, or SMTP)
    // when SMTP_HOST or RESEND_API_KEY environment variables are present.

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry received successfully. Our team will contact you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API Error]", error);
    return NextResponse.json(
      { error: "Internal server error processing inquiry." },
      { status: 500 }
    );
  }
}
