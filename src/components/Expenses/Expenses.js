import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";
import {useState} from 'react';
import ExpenseList from "./ExpensesList";

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
       <ExpenseList items = {filteredExpenses}/>
      </div>
    </div>

  );
}
export default Expenses;
