import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";
import {useState} from 'react';

function Expenses(props) {
  const[year, setYear] = useState('2020');
  const filterChangeHandler = (data) =>{
    setYear(data);
  }

  return (
    <div>
      <div className="expenses">
      <ExpensesFilter defaultYear={year} changeHandler={filterChangeHandler} />
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
