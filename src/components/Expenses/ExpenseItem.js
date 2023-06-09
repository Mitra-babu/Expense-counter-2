import React from "react";
import ExpenseDate from "./ExpenseDate";
import "../CSS/ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  let title = props.title;

  const clickHandler = () => {
    title = "updated";
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
        <button onClick={clickHandler}>Change Item</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
