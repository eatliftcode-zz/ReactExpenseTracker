import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";
import {useState} from 'react';

function Expenses(props) {
  const[year, setYear] = useState('2020');
  const filterChangeHandler = (data) =>{
    setYear(data);
  }

  const filteredExpenses = props.expenses.filter(x => {
    return x.date.getFullYear().toString() === year;
  })

  return (
    <div>
      <div className="expenses">
      <ExpensesFilter defaultYear={year} changeHandler={filterChangeHandler} />
        {filteredExpenses.length === 0 &&  <p>No Expenses found</p>}
        {filteredExpenses.length > 0 && filteredExpenses.map(expense => {
              return (
              <ExpenseItem
              key={expense.id}
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
