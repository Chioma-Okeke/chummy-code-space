import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const { name, email, message } = await req.json();

    try {
        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "okekegeraldenne@gmail.com",
            subject: `Message from ${name}`,
            text: `${message}\n\nFrom: ${email}`,
        });

        return Response.json({ success: true });
    } catch (error) {
        return NextResponse.json({ success: false, error }, { status: 500 });
    }
}
