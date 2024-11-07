import React, { useState } from "react";
import GoalInputForm from "./components/GoalInputForm";
import GoalList from "./components/GoalList";
import GoalChart from "./components/GoalChart";
import FinancialAdvice from "./components/FinancialAdvice";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import "./styles.css";

function App() {
  const [goals, setGoals] = useState([]);
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [savings, setSavings] = useState(0);

  const onGoalSubmit = (goal) => {
    setGoals((prevGoals) => [...prevGoals, goal]);
  };

  const handleIncomeChange = (e) => setIncome(e.target.value);
  const handleExpensesChange = (e) => setExpenses(e.target.value);
  const handleSavingsChange = (e) => setSavings(e.target.value);

  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="financial-profile">
          <h2>Your Financial Profile</h2>
          <div className="financial-inputs">
            <div>
              <label>Monthly Income (₹)</label>
              <input
                type="number"
                value={income}
                onChange={handleIncomeChange}
                placeholder="Enter your income"
              />
            </div>
            <div>
              <label>Monthly Expenses (₹)</label>
              <input
                type="number"
                value={expenses}
                onChange={handleExpensesChange}
                placeholder="Enter your expenses"
              />
            </div>
            <div>
              <label>Current Savings (₹)</label>
              <input
                type="number"
                value={savings}
                onChange={handleSavingsChange}
                placeholder="Enter your savings"
              />
            </div>
          </div>
        </div>
        <GoalInputForm onGoalSubmit={onGoalSubmit} />
        <div className="right-content">
          <GoalList goals={goals} />
          <GoalChart goals={goals} income={income} expenses={expenses} />
          <FinancialAdvice
            income={income}
            expenses={expenses}
            savings={savings}
            goals={goals}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
