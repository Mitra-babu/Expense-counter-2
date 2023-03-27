import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
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
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      />
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      />
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      />
      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      />
    </div>
  );
}

export default App;
