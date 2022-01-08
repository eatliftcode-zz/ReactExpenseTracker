import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {

    const onSubmitExpenseFormHandler = (expenseData) =>{
        const data = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(data);
    }
    return <div className='new-expense'>
        <ExpenseForm onSubmitExpenseForm = {onSubmitExpenseFormHandler}/>
    </div>
}
export default NewExpense;