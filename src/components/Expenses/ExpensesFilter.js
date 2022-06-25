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

//연도별 필터링하기 js의 filter 메소드
/*
Filter랑 Date
value에 맞는 year를 가지고 있는 애들을 가지고 와야하겠지

문제가 생겼다.
날짜 selectedYear state가 하나씩 밀린다.
-초기화 된 게 2022고, 내가 2019를 선택했으면 console에는 2022가 뜨는 문제
-expense에 있는 date는 year,month,day로 나누어져있지 않고, 그냥 한 string (string관련 메소드를 쓸까 아님 다시 year를 나눌까 =.==----)
*/