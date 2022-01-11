import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";
function Expenses(props) {
  const filterChangeHandler = (year) =>{
    console.log(year);
  }

  return (
    <div>
      <div className="expenses">
      <ExpensesFilter changeHandler={filterChangeHandler} />
        {props.expenses.map(expense => {
              return (
              <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
            )
        })}
      </div>
    </div>

  );
}
export default Expenses;
