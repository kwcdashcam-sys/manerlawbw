
import {NextRequest, NextResponse} from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const {name, email, message, subject, honeypot} = await req.json();

  if (honeypot) {
    return NextResponse.json({message: 'Bot submission detected.'}, {status: 200});
  }

  // Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: Number(process.env.EMAIL_SERVER_PORT),
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  });

  // Set up email data
  const mailOptions = {
    from: `'${name}' <${email}>`,
    to: process.env.RECIPIENT_EMAIL,
    subject: `Maner Law Website Contact Form: ${subject}`,
    text: message,
  };

  try {
    // Send mail
    await transporter.sendMail(mailOptions);
    return NextResponse.json({message: 'Email sent successfully!'}, {status: 200});
  } catch (error) {
    console.error(error);
    return NextResponse.json({message: 'Failed to send email.'}, {status: 500});
  }
}
