export interface QuestionnaireData {
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
}

export const generateQuestionnaireEmailHTML = (data: QuestionnaireData): string => {
  const categories = [
    { name: 'Power Saver', score: data.score.powerSaver, color: '#e7a832' },
    { name: 'Risk Manager', score: data.score.riskManager, color: '#e7a832' },
    { name: 'Investment Builder', score: data.score.investmentBuilder, color: '#e7a832' },
  ];

  const questionsData = [
    { q: 'Q1', label: 'Do you have 6+ months of savings?', answer: data.q1_savings },
    { q: 'Q2', label: 'Do you have an emergency fund?', answer: data.q2_emergency },
    { q: 'Q3', label: 'Do you have disability insurance?', answer: data.q3_disability },
    { q: 'Q4', label: 'Do you have a registered pension plan?', answer: data.q4_pension },
    { q: 'Q5', label: 'Have you worked with a financial planner?', answer: data.q5_planner },
    { q: 'Q6', label: 'Do you have a will?', answer: data.q6_will },
    { q: 'Q7', label: 'Do you have power of attorney?', answer: data.q7_poa },
    { q: 'Q8', label: 'Do you have a helper/advisor?', answer: data.q8_helper },
    { q: 'Q9', label: 'Do you have a monthly budget?', answer: data.q9_budget },
    { q: 'Q10', label: 'Do you actively invest?', answer: data.q10_invest },
    { q: 'Q11', label: 'Do you have credit card debt?', answer: data.q11_cc_debt },
    { q: 'Q12', label: 'Do you donate to charity?', answer: data.q12_charity },
    { q: 'Q13', label: 'Do you prefer DIY?', answer: data.q13_diy },
    { q: 'Q14', label: 'Do you have outstanding loans?', answer: data.q14_loans },
    { q: 'Q15', label: 'Any additional comments?', answer: data.q15_other || 'None' },
  ];

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
          max-width: 700px;
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
        .respondent-info {
          background: linear-gradient(135deg, #f5f5f3 0%, #ececea 100%);
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 30px;
          border-left: 4px solid #e7a832;
        }
        .info-row {
          display: block;
          margin-bottom: 12px;
        }
        .info-label {
          font-weight: 600;
          color: #e7a832;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 3px;
        }
        .info-value {
          color: #031931;
          font-size: 14px;
          word-break: break-word;
        }
        .score-section {
          background: #f5f5f3;
          padding: 25px;
          border-radius: 8px;
          margin-bottom: 30px;
        }
        .score-title {
          font-weight: 600;
          color: #031931;
          font-size: 14px;
          text-transform: uppercase;
          margin-bottom: 15px;
          text-align: center;
        }
        .score-items {
          display: grid;
          gap: 12px;
        }
        .score-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          background: #ffffff;
          border-radius: 4px;
          border-left: 4px solid #e7a832;
        }
        .score-name {
          font-weight: 500;
          color: #031931;
        }
        .score-badge {
          background: #e7a832;
          color: #002349;
          padding: 4px 12px;
          border-radius: 20px;
          font-weight: 600;
          font-size: 12px;
        }
        .answers-section {
          margin-top: 30px;
        }
        .answers-title {
          font-weight: 600;
          color: #031931;
          font-size: 14px;
          text-transform: uppercase;
          margin-bottom: 15px;
          border-bottom: 2px solid #e7a832;
          padding-bottom: 10px;
        }
        .answer-item {
          padding: 12px;
          background: #f5f5f3;
          margin-bottom: 10px;
          border-radius: 4px;
          border-left: 3px solid #e7a832;
        }
        .answer-question {
          font-weight: 500;
          color: #031931;
          margin-bottom: 5px;
          font-size: 13px;
        }
        .answer-text {
          color: #5a5a57;
          font-size: 13px;
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
          .score-items {
            grid-template-columns: 1fr;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <!-- Header -->
        <div class="header">
          <div class="logo">LEVPLAN</div>
          <div class="tagline">Financial Assessment Results</div>
        </div>

        <!-- Content -->
        <div class="content">
          <p class="intro">
            A new financial assessment has been completed. Respondent information and results are below.
          </p>

          <!-- Respondent Info -->
          <div class="respondent-info">
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

          <!-- Assessment Scores -->
          <div class="score-section">
            <div class="score-title">Assessment Results</div>
            <div class="score-items">
              ${categories
                .map(
                  (cat) => `
                <div class="score-item">
                  <span class="score-name">${cat.name}</span>
                  <span class="score-badge">${cat.score}/4</span>
                </div>
              `
                )
                .join('')}
            </div>
          </div>

          <!-- Detailed Answers -->
          <div class="answers-section">
            <div class="answers-title">Assessment Questions & Answers</div>
            ${questionsData
              .map(
                (item) => `
              <div class="answer-item">
                <div class="answer-question">${item.q}: ${escapeHtml(item.label)}</div>
                <div class="answer-text"><strong>Answer:</strong> ${escapeHtml(item.answer)}</div>
              </div>
            `
              )
              .join('')}
          </div>

          <div class="divider"></div>

          <p style="color: #5a5a57; font-size: 13px; margin-top: 20px;">
            This respondent has completed the LevPlan financial assessment. Review their profile and reach out to discuss their financial planning needs.
          </p>
        </div>

        <!-- Footer -->
        <div class="footer">
          <p style="margin-bottom: 10px;">
            LevPlan Financial Assessment Portal
          </p>
          <p style="color: #8b8c89; font-size: 11px;">
            &copy; ${new Date().getFullYear()} LevPlan. All rights reserved.
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
