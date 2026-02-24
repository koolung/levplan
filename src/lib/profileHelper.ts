// Helper function to determine user's profile based on scores
export function getProfilePath(score: {
  powerSaver: number;
  riskManager: number;
  investmentBuilder: number;
}): string {
  const scores = [
    { type: 'power-saver', score: score.powerSaver },
    { type: 'risk-manager', score: score.riskManager },
    { type: 'investment-builder', score: score.investmentBuilder },
  ];

  // Find the highest score category
  const sorted = scores.sort((a, b) => b.score - a.score);
  const highestCategory = sorted[0].type;
  const highestScore = sorted[0].score;

  // Determine the level (1 = starter, 2-3 = accumulator, 4 = achiever)
  let level = 1;
  if (highestScore >= 4) level = 3;
  else if (highestScore >= 2) level = 2;
  else level = 1;

  return `/results/${highestCategory}-${level}`;
}

export function getProfileName(score: {
  powerSaver: number;
  riskManager: number;
  investmentBuilder: number;
}): string {
  const scores = [
    { type: 'Power Saver', score: score.powerSaver },
    { type: 'Risk Manager', score: score.riskManager },
    { type: 'Investment Builder', score: score.investmentBuilder },
  ];

  const sorted = scores.sort((a, b) => b.score - a.score);
  return sorted[0].type;
}
