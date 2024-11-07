import React, { useState } from "react";

function GoalInputForm({ onAddGoal }) {
  const [goal, setGoal] = useState("");
  const [amount, setAmount] = useState("");
  const [timeFrame, setTimeFrame] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGoal = {
      goal,
      amount: parseFloat(amount),
      timeFrame: parseInt(timeFrame, 10),
    };
    console.log("Goal Submitted:", newGoal); // Debugging log
    onAddGoal(newGoal);
    setGoal("");
    setAmount("");
    setTimeFrame("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Goal Name"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Target Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Time Frame (years)"
        value={timeFrame}
        onChange={(e) => setTimeFrame(e.target.value)}
        required
      />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalInputForm;
