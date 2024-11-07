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

// Register chart elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const GoalChart = ({ goals }) => {
  const totalAmount = goals.reduce(
    (sum, goal) => sum + parseInt(goal.amount || 0),
    0
  );
  const totalDuration = goals.reduce(
    (sum, goal) => sum + parseInt(goal.duration || 0),
    0
  );

  const data = {
    labels: ["Total Amount", "Total Duration"],
    datasets: [
      {
        label: "Goals Progress",
        data: [totalAmount, totalDuration],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <div className="goal-chart">
      <h3>Goal Progress</h3>
      <Bar data={data} options={{ responsive: true }} />
    </div>
  );
};

export default GoalChart;
