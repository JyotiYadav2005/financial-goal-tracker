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

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function GoalChart({ goal }) {
  const data = {
    labels: Array.from({ length: goal.timeFrame }, (_, i) => `Year ${i + 1}`),
    datasets: [
      {
        label: "Target Amount",
        data: Array(goal.timeFrame).fill(goal.amount),
        borderColor: "rgba(255, 99, 132, 0.2)",
        borderWidth: 2,
        fill: false,
      },
      {
        label: "Savings Plan",
        data: Array.from(
          { length: goal.timeFrame },
          (_, i) => (goal.amount / goal.timeFrame) * (i + 1)
        ),
        borderColor: "rgba(54, 162, 235, 0.2)",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  return <Line data={data} />;
}

export default GoalChart;
