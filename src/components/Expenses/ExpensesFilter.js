import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const userChoose = (event) => {
    //이벤트 핸들러 함수
    //내가 하고 싶은거는 이벤트가 발생하면 상태를 Expenses에 저장하는것.
    props.onFilterChanged(event.target.value); //이거로!!!값 보내기111
  };
  return (
    <div className="expenses-filter__control">
      <div className="expenses-filter label">
        <label>Filtered Year</label>
      </div>
      <div className="expenses-filter select">
        <select value={props.selected} onChange={userChoose}>
          //이벤트 발생
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
