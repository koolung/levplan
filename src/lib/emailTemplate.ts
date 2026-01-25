export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const generateContactEmailHTML = (data: ContactFormData): string => {
  return `
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
        .intro {
          font-size: 16px;
          color: #5a5a57;
          margin-bottom: 30px;
          line-height: 1.8;
        }
        .contact-info {
          background: linear-gradient(135deg, #f5f5f3 0%, #ececea 100%);
          padding: 25px;
          border-radius: 8px;
          margin-bottom: 30px;
          border-left: 4px solid #e7a832;
        }
        .info-row {
          display: block;
          margin-bottom: 18px;
        }
        .info-label {
          font-weight: 600;
          color: #e7a832;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 5px;
        }
        .info-value {
          color: #031931;
          font-size: 15px;
          word-break: break-word;
        }
        .message-box {
          background: #ffffff;
          border: 2px solid #e7a832;
          border-radius: 8px;
          padding: 20px;
          margin-top: 30px;
        }
        .message-label {
          font-weight: 600;
          color: #e7a832;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 12px;
        }
        .message-content {
          color: #5a5a57;
          line-height: 1.8;
          white-space: pre-wrap;
          word-wrap: break-word;
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
        .footer-link:hover {
          text-decoration: underline;
        }
        .cta-button {
          display: inline-block;
          background: linear-gradient(135deg, #e7a832 0%, #d49b1f 100%);
          color: #031931;
          padding: 12px 30px;
          text-decoration: none;
          border-radius: 4px;
          font-weight: 600;
          margin-top: 20px;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .cta-button:hover {
          box-shadow: 0 5px 20px rgba(231, 168, 50, 0.3);
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
        <!-- Header -->
        <div class="header">
          <div class="logo">LEVPLAN</div>
          <div class="tagline">Expert Financial Planning for Canadians</div>
        </div>

        <!-- Content -->
        <div class="content">
          <p class="intro">
            A new contact form submission has been received from your website. Details are provided below:
          </p>

          <div class="contact-info">
            <div class="info-row">
              <div class="info-label">Name</div>
              <div class="info-value">${escapeHtml(data.name)}</div>
            </div>
            <div class="info-row">
              <div class="info-label">Email</div>
              <div class="info-value">
                <a href="mailto:${escapeHtml(data.email)}" style="color: #002349; text-decoration: none;">
                  ${escapeHtml(data.email)}
                </a>
              </div>
            </div>
            <div class="info-row">
              <div class="info-label">Phone</div>
              <div class="info-value">${data.phone ? escapeHtml(data.phone) : 'Not provided'}</div>
            </div>
          </div>

          <div class="message-box">
            <div class="message-label">Message</div>
            <div class="message-content">${escapeHtml(data.message)}</div>
          </div>

          <div class="divider"></div>

          <div style="text-align: center; margin-top: 30px;">
            <p style="color: #5a5a57; margin-bottom: 20px; font-size: 14px;">
              To reply to this message, use the email address provided above.
            </p>
          </div>
        </div>

        <!-- Footer -->
        <div class="footer">
          <p style="margin-bottom: 15px;">
            This is an automated message from LevPlan's contact form system.
          </p>
          <p style="margin-bottom: 15px;">
            <a href="https://levplan.com" class="footer-link">Visit Our Website</a>
          </p>
          <p style="color: #8b8c89; font-size: 12px;">
            &copy; ${new Date().getFullYear()} LevPlan. All rights reserved. | Personalized Financial Planning
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
};

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
