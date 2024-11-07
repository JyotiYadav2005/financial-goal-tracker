import React, { useState } from "react";
import GoalInputForm from "./components/GoalInputForm";
import GoalList from "./components/GoalList";
import "./index.css";

function App() {
  const [goals, setGoals] = useState([]);

  const addGoal = (goal) => {
    console.log("Adding Goal:", goal); // Debugging log
    setGoals((prevGoals) => [...prevGoals, goal]);
    console.log("Updated Goals State:", [...goals, goal]); // Verify updated state
  };

  return (
    <div className="App">
      <h1>Financial Goal Tracker</h1>
      <GoalInputForm onAddGoal={addGoal} />
      <GoalList goals={goals} />
    </div>
  );
}

export default App;
