//App.js에 expense (지출한 내역) 보여주는, 렌더링해주는!
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.js";

function Expenses(props) {
  //App.js의 4개 있는 요소 렌더링(출력)
  return (
    //for(let i = 0; i < props.expenses.length; i++) {
    <div className="expenses">
      <ExpenseItem></ExpenseItem>
    </div>
    //}
  );
}

export default Expenses;
