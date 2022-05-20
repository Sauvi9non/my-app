import "../Expenses/Expenses.css";
import ExpenseItem from "../Expenses/ExpenseItem.js";
import Card from "../UI/Card";

function Expenses(props) {
  return (
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
  );
}

export default Expenses;
