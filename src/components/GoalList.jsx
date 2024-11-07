import React from "react";
import GoalChart from "./GoalChart";
import { formatCurrency } from "../utils";

function GoalList({ goals }) {
  if (goals.length === 0) {
    return <p>No goals added yet.</p>;
  }

  return (
    <div className="goal-list">
      {goals.map((goal, index) => (
        <div key={index} className="goal-item">
          <h3>{goal.goal}</h3>
          <p>Target Amount: {formatCurrency(goal.amount)}</p>
          <p>Time Frame: {goal.timeFrame} years</p>
          <p>
            Monthly Contribution: ₹
            {(goal.amount / (goal.timeFrame * 12)).toFixed(2)}
          </p>
          <GoalChart goal={goal} />
        </div>
      ))}
    </div>
  );
}

export default GoalList;
