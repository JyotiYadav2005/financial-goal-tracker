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

function GoalChart({ goals, totalGoalAmount, totalSavedAmount }) {
  // Calculate the overall monthly contribution needed to meet all goals
  const totalMonthlyContribution =
    totalGoalAmount / goals.reduce((acc, goal) => acc + goal.timeFrame * 12, 0);

  // Calculate the monthly progress based on user savings
  const monthlyData = goals
    .map((goal) => {
      const totalMonths = goal.timeFrame * 12;
      const goalMonthlyContribution = goal.amount / totalMonths;
      return Array.from(
        { length: totalMonths },
        (_, i) => goalMonthlyContribution * (i + 1)
      );
    })
    .flat(); // Combine all monthly data into a single array

  const totalMonthlyProgress = Array.from(
    { length: monthlyData.length },
    (_, i) => {
      const savedProgress = totalSavedAmount / (totalGoalAmount || 1);
      return Math.min(monthlyData[i] * savedProgress, monthlyData[i]);
    }
  );

  // Data for the bar chart
  const data = {
    labels: Array.from(
      { length: monthlyData.length },
      (_, i) => `Month ${i + 1}`
    ),
    datasets: [
      {
        label: "Combined Progress (₹)",
        data: totalMonthlyProgress,
        backgroundColor: "rgba(75, 192, 192, 0.6)", // Light green
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Calculate total progress
  const progressPercentage = Math.min(
    (totalSavedAmount / totalGoalAmount) * 100,
    100
  );

  return (
    <div className="goal-chart">
      <h3>Combined Goal Visualization</h3>

      {/* Progress Bar */}
      <div style={{ marginBottom: "20px" }}>
        <p>Overall Progress: {Math.round(progressPercentage)}%</p>
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
    </div>
  );
}

export default GoalChart;
