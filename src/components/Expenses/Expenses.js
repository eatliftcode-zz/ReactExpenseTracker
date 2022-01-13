import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";
import {useState} from 'react';
import ExpenseList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const[year, setYear] = useState('2020');
  const filterChangeHandler = (data) =>{
    setYear(data);
  }

  const filteredExpenses = props.expenses.filter(x => {
    console.log(props.expenses)
    console.log(x.date)
    return x.date.getFullYear().toString() === year;
  })

  return (
    <div>
      <div className="expenses">
      <ExpensesFilter defaultYear={year} changeHandler={filterChangeHandler} />
      <ExpensesChart expenses ={filteredExpenses}/>
       <ExpenseList items = {filteredExpenses}/>
      </div>
    </div>

  );
}
export default Expenses;
