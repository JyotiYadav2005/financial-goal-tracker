import React from "react";
import GoalChart from "./GoalChart";

function GoalList({ goals }) {
  console.log("Rendering GoalList with goals:", goals); // Debugging log

  if (goals.length === 0) {
    return <p>No goals added yet.</p>;
  }

  return (
    <div>
      {goals.map((goal, index) => (
        <div key={index} style={{ marginBottom: "2rem" }}>
          <h3>{goal.goal}</h3>
          <p>Target Amount: ${goal.amount}</p>
          <p>Time Frame: {goal.timeFrame} years</p>
          <GoalChart key={index} goal={goal} />
        </div>
      ))}
    </div>
  );
}

export default GoalList;
