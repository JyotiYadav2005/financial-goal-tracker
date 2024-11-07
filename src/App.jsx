import React, { useState } from "react";
import GoalInputForm from "./components/GoalInputForm";
import GoalList from "./components/GoalList";
import FinancialAdvice from "./components/FinancialAdvice";
import GoalChart from "./components/GoalChart";
import "./App.css";

function App() {
  const [goals, setGoals] = useState([]);

  const handleGoalSubmit = (goal) => {
    setGoals((prevGoals) => [...prevGoals, goal]);
  };

  return (
    <div className="App">
      <div className="sidebar">
        <h2>Financial Dashboard</h2>
        <ul>
          <li>Dashboard</li>
          <li>Goals</li>
          <li>Advice</li>
        </ul>
      </div>

      <div className="main-content">
        <GoalInputForm onGoalSubmit={handleGoalSubmit} />
        <GoalList goals={goals} />
        <FinancialAdvice />
        <GoalChart goals={goals} />
      </div>
    </div>
  );
}

export default App;
