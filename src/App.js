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
  const [expenses, setExpenses] = useState(DUMMY_DATAS);
 // const [filteredExpenses, setFilteredExpenses] = useState(DUMMY_DATAS);

  const addExpenseHandler = (expense) => {

    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses _expenses={expenses}/>
    </div>
  );
};

export default App;
//저기 <Expenses> 안에 props.expense가 있어야 하니 props를 속성값으로 넣어준다. {}안의 값이 위의 expenses[] 배열의 데이터
