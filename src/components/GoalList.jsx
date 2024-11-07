import React from "react";

function GoalList({ goals }) {
  return (
    <div className="goal-list">
      <h2>Your Financial Goals</h2>
      {goals.length === 0 ? (
        <p>No goals added yet. Start by adding your financial goals.</p>
      ) : (
        <ul>
          {goals.map((goal, index) => (
            <li key={index}>
              <strong>{goal.goal}</strong> - ₹{goal.amount} in {goal.timeFrame}{" "}
              years
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GoalList;
