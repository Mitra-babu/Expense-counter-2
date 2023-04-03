import React from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet paper",
      amount: 94.12,
      date: new Date(2021, 7, 14),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 12.12,
      date: new Date(2021, 8, 14),
    },
    {
      id: "e3",
      title: "New TV",
      amount: 199.99,
      date: new Date(2021, 7, 21),
    },
    {
      id: "e4",
      title: "Scooty",
      amount: 599.0,
      date: new Date(2021, 6, 24),
    },
  ];

  return (
    <div>
      <h2>Let's get started</h2>
      <p>This is also visible</p>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
