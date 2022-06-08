import React, { useState } from "react";
import "./ExpenseForm.css";
/* 
date, title. amount 세 개의 입력 필드가 필요하고 스타일링을 위해 모든 입력 필드에 div태그 추가
*/
const ExpenseForm = () => {
  // document.getElementById('').addEventListener('click', (event)=> {})
  const [enteredTitle, setEnteredTitle] = useState("");
  //처음에는 아무것도 입력되지 않았으니까 ''이고, state에는 값이랑 함수있으니까
  // 그 두값을 얻기 위해 구조분해할당
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  /* 이벤트 객체에서 값 읽어 올 때는 항상 문자열로 읽어온다  */
  const titleChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredTitle(event.target.value);
  };
  /* 하나 이상의 state를 어떻게 관리할 수 있을까 */
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    console.log(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    console.log(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls ">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
