import React from "react";
import "../Expenses/ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropboxChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label className="expenses-filter label">Filter by year</label>
        <select value={props.selected} onChange={dropboxChangeHandler}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
      <div>{}</div>
    </div>
  );
};
export default ExpensesFilter;

/*
 선택한 값을 expesnes로 그리고 그  ㄱ밧을state로 관리
 자식에서 부모 컴포넌트 이벤트 접근방식을 사용해서 데이터를 보낼 수 있다
 함수를 컴포넌트로 내려보내고 그 컴포넌트는 무슨일이 생길 때마다 그 함수를 호출한다
 그래서 expense.js에서 아래로 전달하고 싶은 함수 정의.
 부모 컴포넌트에서 함수 정의하고, 그 정의한 함수를 자식 컴포넌트로 보냄. 자식 컴포넌트에서 무슨 일 생길 때마다 함수 호출
 

*/
