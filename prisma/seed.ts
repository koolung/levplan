import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database with sample blog posts...');

  const samplePosts = [
    {
      title: 'How to Retire Early: A 10-Year Plan',
      slug: 'how-to-retire-early-10-year-plan',
      excerpt: 'Discover proven strategies to accelerate your path to early retirement. Learn about RRSP optimization, tax-efficient investing, and more.',
      content: `# How to Retire Early: A 10-Year Plan

Retiring early is a dream for many Canadians, but it requires careful planning and discipline. In this comprehensive guide, we'll walk you through a proven 10-year roadmap to help you achieve financial independence.

## Setting Your Target

The first step is determining your target retirement number. This is typically 25 times your annual spending. For example, if you spend $60,000 per year, you'd need approximately $1.5 million.

## Phase 1: Years 1-3 - Build Your Foundation

During the first three years, focus on:
- Maximizing your RRSP contributions ($31,560 limit for 2024)
- Contributing to your TFSA ($7,000 annual limit)
- Paying down high-interest debt
- Building an emergency fund of 6-12 months expenses

## Phase 2: Years 4-7 - Accelerate Your Savings

In this phase:
- Increase investment contributions aggressively
- Diversify your portfolio across stocks, bonds, and real estate
- Consider tax-efficient strategies like income splitting
- Review and optimize your investment allocation annually

## Phase 3: Years 8-10 - Fine-Tune and Prepare

As you approach your goal:
- Shift towards more conservative investments
- Plan your retirement income strategy
- Consider CPP and OAS claiming strategies
- Prepare your retirement withdrawal plan

## Key Takeaways

Early retirement is achievable with the right strategy and discipline. Start today, stay consistent, and adjust your plan as needed.`,
      category: 'Retirement Planning',
      readTime: '8 min read',
    },
    {
      title: 'The Ultimate Debt Payoff Strategy',
      slug: 'ultimate-debt-payoff-strategy',
      excerpt: 'Compare popular debt elimination methods like the snowball and avalanche strategies. Find out which is best for your situation.',
      content: `# The Ultimate Debt Payoff Strategy

Debt can be overwhelming, but with the right strategy, you can eliminate it systematically. Let's explore the most effective debt payoff methods and how to choose the right one for your situation.

## Understanding Your Debt

Before choosing a strategy, document all your debts:
- Credit card debt
- Student loans
- Car loans
- Mortgage
- Personal loans

## The Snowball Method

The snowball method involves:
1. Listing debts from smallest to largest balance
2. Making minimum payments on all debts
3. Putting extra money toward the smallest debt
4. Once paid off, rolling that payment into the next debt

**Pros:**
- Quick wins provide motivation
- Psychological boost from eliminating debts
- Simple to understand and implement

**Cons:**
- May pay more interest overall
- Takes longer to eliminate high-interest debt

## The Avalanche Method

The avalanche approach focuses on:
1. Listing debts by interest rate (highest to lowest)
2. Making minimum payments on all debts
3. Putting extra money toward highest interest debt first
4. Moving to the next highest interest debt once paid off

**Pros:**
- Saves the most money on interest
- Mathematically most efficient
- Reduces total payoff time

**Cons:**
- Takes longer to see first debt eliminated
- Requires discipline and tracking

## Which Method is Right for You?

Choose the snowball method if:
- You need motivation from quick wins
- You have many small debts
- You prefer a psychological boost

Choose the avalanche method if:
- You're disciplined and motivated by saving money
- You have high-interest debt
- You want the mathematically optimal approach

## Pro Tips for Success

1. Create a budget and stick to it
2. Increase income through side hustles
3. Cut unnecessary expenses
4. Don't accumulate new debt
5. Consider balance transfers for high-interest debt

Start your debt elimination journey today!`,
      category: 'Debt Management',
      readTime: '6 min read',
    },
    {
      title: 'TFSA vs RRSP: Which Should You Max Out First?',
      slug: 'tfsa-vs-rrsp-which-first',
      excerpt: 'A detailed comparison of registered accounts and which one deserves your contributions first based on your income and goals.',
      content: `# TFSA vs RRSP: Which Should You Max Out First?

Both TFSAs and RRSPs are powerful tax-advantaged savings vehicles, but they serve different purposes. Understanding when to prioritize each one is crucial to optimizing your tax situation and long-term wealth.

## Key Differences

### TFSA (Tax-Free Savings Account)
- Tax-free growth on all earnings
- Tax-free withdrawals anytime
- 2024 annual limit: $7,000
- No tax deduction on contributions
- Great for emergency funds and short-term goals

### RRSP (Registered Retirement Savings Plan)
- Tax deduction on contributions
- Tax-deferred growth (pay tax on withdrawal)
- 2024 limit: 18% of prior year income (max $31,560)
- Locked in until retirement (generally)
- Designed for long-term retirement savings

## When to Prioritize RRSP First

1. **High Income Earners**: Large tax refund makes RRSP contributions attractive
2. **Employer Matching**: If your employer matches RRSP, always take the match
3. **Long Investment Horizon**: 30+ years until retirement
4. **Higher Tax Bracket**: You'll be in a lower bracket in retirement

## When to Prioritize TFSA First

1. **Lower Income**: Less tax benefit from RRSP
2. **Need Flexibility**: Want access to funds without penalties
3. **Irregular Income**: Self-employed or commission-based work
4. **Emergency Fund**: Build tax-free emergency savings

## The Optimal Strategy

For most Canadians, consider this order:
1. Contribute enough to RRSP to get full employer match (if available)
2. Max out TFSA ($7,000)
3. Return to RRSP with remaining contribution room
4. Consider taxable investments only after maximizing both

## Real-World Scenario

Let's say you earn $75,000 annually with $10,000 to invest:

**Strategy A (RRSP First):**
- RRSP contribution: $10,000
- Tax refund at 30% marginal rate: $3,000
- Total tax savings: $3,000

**Strategy B (TFSA First):**
- TFSA contribution: $7,000
- RRSP contribution: $3,000
- Tax refund at 30%: $900
- Total tax savings: $900
- But: TFSA funds are accessible anytime

## Key Takeaway

The best account to max out first depends on your personal situation. When in doubt, prioritize employer matching, then balance between both accounts based on your income level and financial needs.`,
      category: 'Investing',
      readTime: '10 min read',
    },
  ];

  for (const post of samplePosts) {
    const existing = await prisma.blogPost.findUnique({
      where: { slug: post.slug },
    });

    if (!existing) {
      await prisma.blogPost.create({
        data: post,
      });
      console.log(`✓ Created: ${post.title}`);
    } else {
      console.log(`- Skipped: ${post.title} (already exists)`);
    }
  }

  console.log('Seeding complete!');
}

main()
  .catch((error) => {
    console.error('Seeding error:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
