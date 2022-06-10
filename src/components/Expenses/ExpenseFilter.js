import React, { useState } from "react";
import "../Expenses/ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const [selectedYear, setYearHandler] = useState("");

  const YearHandler = (event) => {
    setYearHandler(
      event.target.value
    ); /*얘가 state랑 관계된거 이게 실행됨으로써 state가 바뀐다.*/
  };

  props.onSelectYear(selectedYear); //Expenses에 만들어 놓을 함수를 이렇게 실행한다!

  return (
    <div className="expense-filter">
      <div>
        <select className="expense-filter__year" onChange={YearHandler}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
      <div>{selectedYear}</div>
    </div>
  );
};
export default ExpenseFilter;
