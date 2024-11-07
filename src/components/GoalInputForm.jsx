import React, { useState } from "react";

function GoalInputForm({ onGoalSubmit }) {
  const [goalName, setGoalName] = useState("");
  const [goalAmount, setGoalAmount] = useState("");
  const [timeFrame, setTimeFrame] = useState("");
  const [savedAmount, setSavedAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (goalName && goalAmount && timeFrame && savedAmount) {
      onGoalSubmit({
        goal: goalName,
        amount: parseFloat(goalAmount),
        timeFrame: parseInt(timeFrame),
        savedAmount: parseFloat(savedAmount),
      });
      setGoalName("");
      setGoalAmount("");
      setTimeFrame("");
      setSavedAmount("");
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className="goal-input-form">
      <h2>Add Your Financial Goal</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Goal Name</label>
          <input
            type="text"
            value={goalName}
            onChange={(e) => setGoalName(e.target.value)}
            placeholder="e.g., Buy a Car"
          />
        </div>
        <div>
          <label>Goal Amount (₹)</label>
          <input
            type="number"
            value={goalAmount}
            onChange={(e) => setGoalAmount(e.target.value)}
            placeholder="e.g., 500000"
          />
        </div>
        <div>
          <label>Time Frame (years)</label>
          <input
            type="number"
            value={timeFrame}
            onChange={(e) => setTimeFrame(e.target.value)}
            placeholder="e.g., 5"
          />
        </div>
        <div>
          <label>Current Savings (₹)</label>
          <input
            type="number"
            value={savedAmount}
            onChange={(e) => setSavedAmount(e.target.value)}
            placeholder="e.g., 50000"
          />
        </div>
        <button type="submit">Add Goal</button>
      </form>
    </div>
  );
}

export default GoalInputForm;
