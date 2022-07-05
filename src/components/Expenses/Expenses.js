import React, { useState } from "react";
import "../Expenses/Expenses.css";
import ExpenseItem from "../Expenses/ExpenseItem.js";
import Card from "../UI/Card";
import ExpenseForm from "../NewExpense/ExpenseForm";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear,setFilteredYear] = useState('2022');

  const filterChanged = (selectedYear) => {
   setFilteredYear(selectedYear);
   console.log(filteredYear);
  };

  const filteredExpenses = props._expenses.filter( (expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
    })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChanged={filterChanged}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
