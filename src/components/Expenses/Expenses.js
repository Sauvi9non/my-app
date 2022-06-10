import "../Expenses/Expenses.css";
import ExpenseItem from "../Expenses/ExpenseItem.js";
import Card from "../UI/Card";
import ExpenseForm from "../NewExpense/ExpenseForm";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
  const setYearHandler = (selectedYear) => {
    const filterYear = {
      //이거로 state로 바뀐 값을 복사해서 가져오고
      ...selectedYear,
      //id: Math.random().toString(),
    };
    console.log("이곳은 Expenses " + filterYear);
  };
  return (
    <div>
      <ExpenseFilter onSelectYear={setYearHandler} />

      <Card className="expenses">
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
      </Card>
    </div>
  );
}

export default Expenses;
