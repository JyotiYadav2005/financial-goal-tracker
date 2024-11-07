import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function GoalChart({ goals, income, expenses }) {
  const data = {
    labels: goals.map((goal) => goal.goal),
    datasets: [
      {
        label: "Goal Progress",
        data: goals.map((goal) => (goal.savedAmount / goal.amount) * 100), // % Progress
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="goal-chart">
      <h2>Your Goals Progress</h2>
      <Line data={data} />
    </div>
  );
}

export default GoalChart;
