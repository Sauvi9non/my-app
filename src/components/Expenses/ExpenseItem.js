import "../Expenses/ExpenseItem.css";
import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  let title = props.title;

  const clickHandler = () => {
    //console.log("Clicked!");
    title = "Altered!";
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>

        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <input type="checkbox" name="hi" onClick={clickHandler}>
        안녕
      </input>
    </Card> //clickHandler()가 아니라 clickHandler라고 지정만 하는 이유. 괄호 추가시 자바스크립트는 그걸 실행. 코드라인은 JSX가 평가될 때 실행된다.
    //이 코드라인은 JSX가 평가될 때 실행된다
    // . 그런데, clickHandler()로 쓰면 자바스크립트 코드로 인식, 바로 실행된다.
    //실행시간에 차이가 생기기 때문에 clickHandler라고 지정만 하는 것.
    //그럼 음......인수가 있으면
  );
}

export default ExpenseItem;
