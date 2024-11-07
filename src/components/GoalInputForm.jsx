import React, { useState } from "react";
import { formatCurrency } from "../utils";

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
    onAddGoal(newGoal);
    setGoal("");
    setAmount("");
    setTimeFrame("");
  };

  const calculateMonthlyContribution = () => {
    if (amount && timeFrame) {
      return (amount / (timeFrame * 12)).toFixed(2); // Calculate monthly savings
    }
    return "0.00";
  };

  return (
    <div className="goal-input-form">
      <h2>Add a Financial Goal</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Goal Name:</label>
          <input
            type="text"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="Enter your financial goal"
            required
          />
        </div>
        <div>
          <label>Target Amount (₹):</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            required
          />
        </div>
        <div>
          <label>Time Frame (in years):</label>
          <input
            type="number"
            value={timeFrame}
            onChange={(e) => setTimeFrame(e.target.value)}
            placeholder="Enter time frame"
            required
          />
        </div>
        <button type="submit">Add Goal</button>
      </form>

      {amount && timeFrame && (
        <div>
          <p>
            Estimated Monthly Contribution: ₹{calculateMonthlyContribution()}
          </p>
        </div>
      )}
    </div>
  );
}

export default GoalInputForm;
