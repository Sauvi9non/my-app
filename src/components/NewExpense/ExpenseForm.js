import React, { useState } from "react";
import "./ExpenseForm.css";
/* 
date, title. amount 세 개의 입력 필드가 필요하고 스타일링을 위해 모든 입력 필드에 div태그 추가
*/
const ExpenseForm = (props) => {
  //자식
  // document.getElementById('').addEventListener('click', (event)=> {})

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // //state 여러 개 쓰는 대신에, state 하나로 여러개 관리하기 두번째, 세번째 방법에서
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });
  /* 이벤트 객체에서 값 읽어 올 때는 항상 문자열로 읽어온다  */
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value); //첫번째 방법

    // setUserInput({ //두번째 방법
    //   ...userInput, //객체 취해서 모든 키와 값 쌍 추출해서 새 객체에 추가.
    //   enteredTitle: event.target.value,
    //   //이러면 다른  amount 나 date 다른 키는 잃어버리게 되므로 다른 데이터가 사라지지 않도록 해야하는데, 업데이트 되지 않는 다른 두 개의 값을 복사 -> 스프레드 연산자 ...를 쓴다
    // });
  };
  /* 하나 이상의 state를 어떻게 관리할 수 있을까 두번째, 세번째 방법*/
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value); //첫번째 방법

    // setUserInput({ //두번째 방법
    //   ...userInput, //여기서 이전 상태에 따라 업데이트 하는 중...그래서 기존 값을 복사하고 있음 만일 하나씩 증가하는 카운터 같은 걸 쓰는 경우에는 아무래도 좀 비효율적이겠지.
    //   enteredAmount: event.target.value,
    // }); //그래서 이렇게 하는 대신에 함수를 호출해서 그 안에 함수를 넣어야 한다고?

    // setUserInput((prevState) => { //세번째 방법, 이 방법이 이전 상태에 기반하는 상황에서 최신 상태의 스냅샷에서 작업하도록 하는 안전한 방법
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value); //첫번째 방법

    //두번째 방법
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault(); //1. 브라우저에 의해 자동적으로 웹페이지 reload 되는 것 방지
    /* form이 submit되는 이벤트가 발생하면, 
    state들을 모아 하나의 객체로 만드는 동작을 시켜야한다는 거지 여기서*/

    const expenseData = {
      // 2. state들을 모아서 하나의 객체로 만든다. 왜냐면 state를 각각 선언해서
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData); //이거로 NewExpense에 있는 saveExpenseDataHandler함수 가져오는건가
    setEnteredTitle(""); //다시 초기 상태로, 폼 전송되고 나서 다시 초기상태도 override
    setEnteredAmount("");
    setEnteredDate("");
  };
  /* 
  기본 브라우저 동작 중,
  form이 제출되면 (그 버튼 클릭하면) 페이지는 reload 된다.
  브라우저는 폼이 제출될 때마다 자동적으로 서버에 요청보내고 다시 값 받아오기때문에? ->>그래서 이거 비활성화 시켜야한다. 이게 prevenDefault() 메소드
  근데 우리는 자동적으로가 아니라 수동으로 값 모아서 결합해서 뭐해서 폼 제출하고 싶은거
*/
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls ">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount} //
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
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
