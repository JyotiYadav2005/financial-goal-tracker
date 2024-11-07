import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function GoalChart({ goal }) {
  // Monthly Contribution
  const monthlyContribution = goal.amount / (goal.timeFrame * 12);

  // Create the monthly data for the bar chart
  const monthlyData = Array.from(
    { length: goal.timeFrame * 12 },
    (_, i) => monthlyContribution * (i + 1)
  );

  // Data for the bar chart
  const data = {
    labels: Array.from(
      { length: goal.timeFrame * 12 },
      (_, i) => `Month ${i + 1}`
    ),
    datasets: [
      {
        label: "Progress (₹)",
        data: monthlyData,
        backgroundColor: "rgba(75, 192, 192, 0.6)", // Light green
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Calculate total progress
  const totalSaved = monthlyData[monthlyData.length - 1];
  const progressPercentage = Math.min((totalSaved / goal.amount) * 100, 100);

  return (
    <div className="goal-chart">
      <h3>Goal Visualization</h3>

      {/* Progress Bar */}
      <div style={{ marginBottom: "20px" }}>
        <p>Progress: {Math.round(progressPercentage)}%</p>
        <div
          style={{
            width: "100%",
            backgroundColor: "#e0e0e0",
            height: "20px",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              width: `${progressPercentage}%`,
              height: "100%",
              backgroundColor: "#4caf50",
              borderRadius: "10px",
            }}
          ></div>
        </div>
      </div>

      {/* Bar Chart */}
      <Bar
        data={data}
        options={{ responsive: true, scales: { x: { beginAtZero: true } } }}
      />

      {/* Milestones (optional) */}
      <div style={{ marginTop: "20px" }}>
        <p>
          <strong>Milestone Tracker:</strong>
        </p>
        <ul>
          <li>{`50% Target: ₹${(goal.amount / 2).toLocaleString("en-IN")}`}</li>
          <li>{`75% Target: ₹${(goal.amount * 0.75).toLocaleString(
            "en-IN"
          )}`}</li>
          <li>{`100% Target: ₹${goal.amount.toLocaleString("en-IN")}`}</li>
        </ul>
      </div>
    </div>
  );
}

export default GoalChart;
