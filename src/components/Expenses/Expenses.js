import React, { useState } from "react";
import "../Expenses/Expenses.css";
import ExpenseItem from "../Expenses/ExpenseItem.js";
import Card from "../UI/Card";
import ExpenseForm from "../NewExpense/ExpenseForm";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear,setFilteredYear] = useState('2022');
 let confirmed = <p> No Expenses </p>; {/*세번째 방법*/}

  const filterChanged = (selectedYear) => {
   setFilteredYear(selectedYear);
   console.log(filteredYear);
  };

  const filteredExpenses = props._expenses.filter( (expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
    })
    {/*세번째 방법*/}
  if (filteredExpenses.length > 0) {
    confirmed = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChanged={filterChanged}
        />
         {/*Conditional rendering, if 조건문 사용하는 게 아니라 삼항연산자였던가, x ? a : b 이거 써서
         첫번째 방법: x ? a : b 사용해서
         두번재 방법: 약간의 heck 사용 {x(조건) && a} {x(조건) && b}
         세번째 방법: let 변수 이용해서 (더 깔끔하게 만들기)
  */}

        {filteredExpenses.length === 0 ? <p className="temp">No Expenses </p> : filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )) }
      {/*두번째 방법*/}
      {filteredExpenses.length === 0 && <p className="temp">No Expenses </p>}
      {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}

      {/*세번째 방법*/}
      {confirmed}

      </Card>
    </div>
  );
}

export default Expenses;
