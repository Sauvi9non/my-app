//App.js에 expense (지출한 내역) 보여주는, 렌더링해주는!
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.js";

function Expenses(props) {
  //App.js의 4개 있는 요소 렌더링(출력)
  /* for (let i = 0; i < props.expenses.length; i++) {
    <div className="expenses">
      <ExpenseItem
        title={props.expenses[i].title}
        amount={props.expenses[i].amount}
        date={props.expenses[i].date}
      ></ExpenseItem>
    </div>;
  }*/
  return (
    <div className="expenses">
      <ExpenseItem
        title={props._expenses[0].title}
        amount={props._expenses[0].amount}
        date={props._expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props._expenses[1].title}
        amount={props._expenses[1].amount}
        date={props._expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props._expenses[2].title}
        amount={props._expenses[2].amount}
        date={props._expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props._expenses[3].title}
        amount={props._expenses[3].amount}
        date={props._expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default Expenses;
