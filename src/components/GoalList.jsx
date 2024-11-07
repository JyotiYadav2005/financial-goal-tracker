import React from "react";
import GoalChart from "./GoalChart";
import { formatCurrency } from "../utils";

function GoalList({ goals }) {
  if (goals.length === 0) {
    return <p>No goals added yet.</p>;
  }

  // Aggregate all goals' data
  const totalGoalAmount = goals.reduce((acc, goal) => acc + goal.amount, 0);
  const totalSavedAmount = goals.reduce(
    (acc, goal) => acc + goal.savedAmount,
    0
  );

  return (
    <div className="goal-list">
      <h2>All Goals Combined</h2>
      <div>
        <p>
          <strong>Total Goal Amount: </strong> {formatCurrency(totalGoalAmount)}
        </p>
        <p>
          <strong>Total Saved Amount: </strong>{" "}
          {formatCurrency(totalSavedAmount)}
        </p>
        <GoalChart
          goals={goals}
          totalGoalAmount={totalGoalAmount}
          totalSavedAmount={totalSavedAmount}
        />
      </div>
    </div>
  );
}

export default GoalList;
