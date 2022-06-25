import React, { useState } from "react";
import "../Expenses/Expenses.css";
import ExpenseItem from "../Expenses/ExpenseItem.js";
import Card from "../UI/Card";
import ExpenseForm from "../NewExpense/ExpenseForm";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  //여기에서의 props는 app.js의 속성인 _expenses
  const [selectedYear, setSelectedYear] = useState("2022");

  const filterChanged = (year) => {
    //year으로 받았다! event.target.value를
    console.log("This is Expenses.");
    //selectedYear에 값을 저장해야하는데...
    setSelectedYear(year);
    console.log(selectedYear);
    props.onChooseYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onFilterChanged={filterChanged}
        />
        {props._expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}

        {/*/ 데이터 배열(_expense속성)의요소에 접근해서 모든 배열 요소에 대해
        JSX요소 생성, //즉 밑에 ExpenseItem 태그 요소를 각 데이터에 대해
  만들겠다 //map 메소드.*/}
      </Card>
    </div>
  );
}

export default Expenses;
