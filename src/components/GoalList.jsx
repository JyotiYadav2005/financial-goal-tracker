import React from "react";

const GoalList = ({ goals }) => {
  return (
    <div className="goal-list">
      <h3>Your Financial Goals</h3>
      {goals.length === 0 ? (
        <p>No goals added yet.</p>
      ) : (
        <ul>
          {goals.map((goal, index) => (
            <li key={index}>
              <h4>{goal.name}</h4>
              <p>Amount: ₹{goal.amount}</p>
              <p>Duration: {goal.duration} months</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GoalList;
