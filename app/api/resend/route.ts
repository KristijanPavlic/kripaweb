import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    await resend.emails.send({
      from: "KriPa Web <kristijan@kripaweb.com>",
      to: "contact@kripaweb.com",
      subject: "New Contact Form Submission",
      html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Failed to send email", error }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
