import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { generateContactEmailHTML } from '@/lib/emailTemplate';

// Configure your SMTP transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  recaptchaToken: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format.' },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA token
    if (!body.recaptchaToken) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed.' },
        { status: 400 }
      );
    }

    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${body.recaptchaToken}`,
    });

    const recaptchaData = await recaptchaResponse.json();

    // Check if reCAPTCHA verification was successful (score > 0.5)
    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed. Please try again.' },
        { status: 400 }
      );
    }

    // Generate email HTML
    const emailHtml = generateContactEmailHTML(body);

    // Send email to robert@levplan.com
    await transporter.sendMail({
      from: '"LevPlan Contact Form" <contact@levplan.com>',
      to: 'robert@levplan.com',
      subject: `Contact Form Submission from ${body.name}`,
      html: emailHtml,
      text: `Contact Form Submission\n\nName: ${body.name}\nEmail: ${body.email}\nPhone: ${body.phone || 'Not provided'}\n\nMessage:\n${body.message}`,
      replyTo: body.email,
      headers: {
        'X-Mailer': 'LevPlan Contact Form',
        'X-Priority': '3',
        'Importance': 'normal',
        'X-MSMail-Priority': 'Normal',
      },
    });

    // Optionally, send a confirmation email to the user
    const confirmationHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #031931;
            background: linear-gradient(135deg, #f5f5f3 0%, #e8e8e5 100%);
          }
          .email-container {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            box-shadow: 0 10px 40px rgba(3, 25, 49, 0.1);
          }
          .header {
            background: linear-gradient(135deg, #002349 0%, #1a4d73 100%);
            padding: 40px 30px;
            text-align: center;
            border-bottom: 4px solid #e7a832;
          }
          .logo {
            font-family: 'FreightDisplayProBook', serif;
            font-size: 32px;
            font-weight: 500;
            color: #e7a832;
            margin-bottom: 10px;
            letter-spacing: 2px;
          }
          .tagline {
            color: #babbb7;
            font-size: 14px;
            font-weight: 300;
          }
          .content {
            padding: 40px 30px;
          }
          .message {
            font-size: 16px;
            color: #5a5a57;
            line-height: 1.8;
            margin-bottom: 30px;
          }
          .divider {
            height: 2px;
            background: linear-gradient(90deg, transparent, #e7a832, transparent);
            margin: 30px 0;
          }
          .footer {
            background: #031931;
            padding: 30px;
            text-align: center;
            color: #babbb7;
            font-size: 13px;
          }
          .footer-link {
            color: #e7a832;
            text-decoration: none;
            margin: 0 10px;
          }
          @media (max-width: 600px) {
            .email-container {
              width: 100%;
            }
            .header {
              padding: 30px 20px;
            }
            .content {
              padding: 30px 20px;
            }
            .logo {
              font-size: 24px;
            }
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <div class="logo">LEVPLAN</div>
            <div class="tagline">Expert Financial Planning for Canadians</div>
          </div>
          <div class="content">
            <p class="message">
              Hi ${body.name.split(' ')[0]},<br><br>
              Thank you for reaching out to LevPlan! We've received your message and appreciate you taking the time to contact us.<br><br>
              Our team will review your inquiry and get back to you as soon as possible.<br><br>
              Best regards,<br>
              <strong>The LevPlan Team</strong>
            </p>
            <div class="divider"></div>
            <p style="color: #8b8c89; font-size: 14px; text-align: center;">
              Visit us at <a href="https://levplan.com" style="color: #e7a832; text-decoration: none;">levplan.com</a>
            </p>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} LevPlan. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    await transporter.sendMail({
      from: '"LevPlan" <contact@levplan.com>',
      to: body.email,
      subject: 'Thank You for Contacting LevPlan',
      html: confirmationHtml,
      text: `Thank you for contacting LevPlan!\n\nWe have received your message and will get back to you as soon as possible.\n\nBest regards,\nThe LevPlan Team\n\nVisit us at https://levplan.com`,
      headers: {
        'X-Mailer': 'LevPlan',
        'X-Priority': '3',
        'Importance': 'normal',
      },
    });

    return NextResponse.json(
      { success: true, message: 'Your message has been sent successfully. We will get back to you soon!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
