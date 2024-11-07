import React, { useState } from "react";
import GoalInputForm from "./components/GoalInputForm";
import GoalList from "./components/GoalList";
import { formatCurrency } from "./utils";

function App() {
  const [goals, setGoals] = useState([]);

  // Function to handle goal submission
  const onGoalSubmit = (goal) => {
    setGoals((prevGoals) => [...prevGoals, goal]);
  };

  return (
    <div className="App">
      <GoalInputForm onGoalSubmit={onGoalSubmit} />
      <GoalList goals={goals} />
    </div>
  );
}

export default App;
