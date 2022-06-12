import React, { useState } from "react";
import "../Expenses/Expenses.css";
import ExpenseItem from "../Expenses/ExpenseItem.js";
import Card from "../UI/Card";
import ExpenseForm from "../NewExpense/ExpenseForm";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseItem
          title={props._expenses[0].title}
          amount={props._expenses[0].amount}
          date={props._expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props._expenses[1].title}
          amount={props._expenses[1].amount}
          date={props._expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props._expenses[2].title}
          amount={props._expenses[2].amount}
          date={props._expenses[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props._expenses[3].title}
          amount={props._expenses[3].amount}
          date={props._expenses[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}

export default Expenses;
