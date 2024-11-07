import React from "react";

function FinancialAdvice({ income, expenses, savings, goals }) {
  const totalGoalsAmount = goals.reduce((acc, goal) => acc + goal.amount, 0);
  const totalSavedAmount = goals.reduce(
    (acc, goal) => acc + goal.savedAmount,
    0
  );
  const remainingAmount = totalGoalsAmount - totalSavedAmount;

  // Calculate monthly savings needed for each goal
  const recommendedSavings = goals.map((goal) => {
    const monthsLeft = goal.timeFrame * 12;
    const remainingGoalAmount = goal.amount - goal.savedAmount;
    const monthlySavings = remainingGoalAmount / monthsLeft;
    return monthlySavings;
  });

  return (
    <div className="financial-advice">
      <h2>Your Personalized Financial Advice</h2>
      <p>
        Based on your financial profile, here's how you can work towards your
        goals:
      </p>
      <ul>
        {goals.map((goal, index) => (
          <li key={index}>
            <strong>{goal.goal}:</strong> ₹
            {recommendedSavings[index].toFixed(2)} per month
          </li>
        ))}
      </ul>
      <p>
        Total Monthly Savings Recommendation: ₹
        {recommendedSavings.reduce((acc, val) => acc + val, 0).toFixed(2)}
      </p>
      <p>Total Savings Needed for All Goals: ₹{remainingAmount.toFixed(2)}</p>
    </div>
  );
}

export default FinancialAdvice;
