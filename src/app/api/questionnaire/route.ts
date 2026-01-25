import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { generateQuestionnaireEmailHTML } from '@/lib/questionnaireEmailTemplate';

// Configure your SMTP transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: 'contact@levplan.com',
    pass: 'Levplan@2025',
  },
});
// 
interface QuestionnaireData {
  name: string;
  email: string;
  phone: string;
  q1_savings: string;
  q2_emergency: string;
  q3_disability: string;
  q4_pension: string;
  q5_planner: string;
  q6_will: string;
  q7_poa: string;
  q8_helper: string;
  q9_budget: string;
  q10_invest: string;
  q11_cc_debt: string;
  q12_charity: string;
  q13_diy: string;
  q14_loans: string;
  q15_other: string;
  score: {
    powerSaver: number;
    riskManager: number;
    investmentBuilder: number;
  };
  recaptchaToken: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: QuestionnaireData = await request.json();

    // Validate required fields
    if (!body.name || !body.email) {
      return NextResponse.json(
        { error: 'Missing required fields: name and email are required.' },
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
    const emailHtml = generateQuestionnaireEmailHTML(body);

    // Send email to robert@levplan.com
    await transporter.sendMail({
      from: '"LevPlan Assessment" <contact@levplan.com>',
      to: 'robert@levplan.com',
      subject: `Financial Assessment Completed by ${body.name}`,
      html: emailHtml,
      text: `Financial Assessment Submission\n\nName: ${body.name}\nEmail: ${body.email}\nPhone: ${body.phone || 'Not provided'}\n\nAssessment Scores:\nPower Saver: ${body.score.powerSaver}/4\nRisk Manager: ${body.score.riskManager}/4\nInvestment Builder: ${body.score.investmentBuilder}/4`,
      replyTo: body.email,
      headers: {
        'X-Mailer': 'LevPlan Assessment',
        'X-Priority': '3',
        'Importance': 'normal',
        'X-MSMail-Priority': 'Normal',
      },
    });

    // Send confirmation email to the respondent
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
          .score-summary {
            background: linear-gradient(135deg, #f5f5f3 0%, #ececea 100%);
            padding: 25px;
            border-radius: 8px;
            margin: 30px 0;
            border-left: 4px solid #e7a832;
          }
          .score-title {
            font-weight: 600;
            color: #e7a832;
            font-size: 13px;
            text-transform: uppercase;
            margin-bottom: 15px;
            text-align: center;
          }
          .score-list {
            list-style: none;
          }
          .score-list li {
            padding: 8px 0;
            color: #031931;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .score-badge {
            background: #e7a832;
            color: #002349;
            padding: 2px 10px;
            border-radius: 20px;
            font-weight: 600;
            font-size: 12px;
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
            font-size: 12px;
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
            <div class="tagline">Your Assessment Results</div>
          </div>
          <div class="content">
            <p class="message">
              Hi ${body.name.split(' ')[0]},<br><br>
              Thank you for completing the LevPlan financial assessment! We've received your responses and will review them carefully.<br><br>
              Our team will be in touch shortly to discuss your results and explore how we can help you with your financial planning goals.
            </p>
            
            <div class="score-summary">
              <div class="score-title">Your Assessment Results</div>
              <ul class="score-list">
                <li>
                  <span>Power Saver</span>
                  <span class="score-badge">${body.score.powerSaver}/4</span>
                </li>
                <li>
                  <span>Risk Manager</span>
                  <span class="score-badge">${body.score.riskManager}/4</span>
                </li>
                <li>
                  <span>Investment Builder</span>
                  <span class="score-badge">${body.score.investmentBuilder}/4</span>
                </li>
              </ul>
            </div>

            <p style="color: #5a5a57; font-size: 14px; line-height: 1.8;">
              These scores reflect your financial habits and priorities across three key areas. Our advisors will use this information to provide personalized recommendations tailored to your unique situation.
            </p>

            <div class="divider"></div>

            <p style="color: #5a5a57; font-size: 14px; margin-top: 20px;">
              Best regards,<br>
              <strong>The LevPlan Team</strong>
            </p>
          </div>
          <div class="footer">
            <p style="margin-bottom: 10px;">
              <a href="https://levplan.com" class="footer-link">Visit Our Website</a>
            </p>
            <p style="color: #8b8c89; font-size: 11px;">
              &copy; ${new Date().getFullYear()} LevPlan. All rights reserved.
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    await transporter.sendMail({
      from: '"LevPlan" <contact@levplan.com>',
      to: body.email,
      subject: 'Your LevPlan Assessment Results',
      html: confirmationHtml,
      text: `Thank you for completing the LevPlan financial assessment!\n\nYour Results:\nPower Saver: ${body.score.powerSaver}/4\nRisk Manager: ${body.score.riskManager}/4\nInvestment Builder: ${body.score.investmentBuilder}/4\n\nOur team will be in touch soon.\n\nBest regards,\nThe LevPlan Team\n\nVisit us at https://levplan.com`,
      headers: {
        'X-Mailer': 'LevPlan',
        'X-Priority': '3',
        'Importance': 'normal',
      },
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your assessment has been submitted successfully. We will review your responses and contact you shortly.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to submit assessment. Please try again later.' },
      { status: 500 }
    );
  }
}
