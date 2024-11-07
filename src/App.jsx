import React, { useState } from "react";
import GoalInputForm from "./components/GoalInputForm";
import GoalList from "./components/GoalList";

function App() {
  const [goals, setGoals] = useState([]);

  const addGoal = (goal) => {
    setGoals((prevGoals) => [...prevGoals, goal]);
  };

  return (
    <div className="App">
      <h1>Financial Goal Planner</h1>
      <GoalInputForm onAddGoal={addGoal} />
      <GoalList goals={goals} />
    </div>
  );
}

export default App;
