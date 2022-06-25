import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_DATAS = [
  /* App.js 밖에서 추출 왜지?? 상태 initialize하는 데 쓸 수 있다*/
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_DATAS); //

  const addExpenseHandler = (expense) => {
    /*여기의 expense를 expenses 배열에 추가하면 되는데 state를 사용한다.*/
    /*setExpenses([expense, ...expenses]);*/
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });

    /* 업데이트를 어떻게 하냐
  setExpenses를 이용해서 값에 새로운 배열을 넣을 수 있다.
expense, ...expenses를 씀으로서 expense라는 새 요소 추가하고, ...expenses로 기존 배열 복사
기존 배열에 새로운 요소를 넣을 수 있다. */
  };

  const chooseYearHandler = (selectedYear) => {
    /* 원래 데이터 배열.filter(expense => expense.date.year == selectedYear) */
    console.log("여기는 App.js입니다.");
    console.log(selectedYear);
    console.log(expenses[0].date.toString().slice(11,15));
    const result = expenses.filter(expense => (expense.date.toString().slice(11,15) == selectedYear));
    console.log(result);
    setExpenses(result);
  }

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { _expenses: expenses })
  // );
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses _expenses={expenses} onChooseYear={chooseYearHandler}/>
    </div>
  );
};

export default App;
//저기 <Expenses> 안에 props.expense가 있어야 하니 props를 속성값으로 넣어준다. {}안의 값이 위의 expenses[] 배열의 데이터
