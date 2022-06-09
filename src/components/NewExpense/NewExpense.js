import React from "react";
import ExpenseItem from "../Expenses/ExpenseItem";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData /*ExpenseForm에 submitHandler에 있는 객체*/,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    /*props는 속성 가지고 오는거니까 props.속성이고
    이 속성이 값으로 가지고 있는 함수는 expenseData를 매개변수로 하니까// */
    //console.log(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
