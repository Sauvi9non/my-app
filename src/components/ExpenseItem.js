import "./ExpenseItem.css";

function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const date = props.date.toLocaleString("en-US", { day: "numeric" }); // + "th";
  const year = props.date.toLocaleString("en-US", { year: "numeric" });

  return (
    <div className="expense-item">
      <div>
        {props.date.toISOString()}
        <div>{month}</div>
        <div>{date}</div>
        <div>{year}</div>
      </div>

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
