import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react/cjs/react.development';
const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false)
    const onSubmitExpenseFormHandler = (expenseData) =>{
        const data = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(data);
        setShowForm(false);
    }
    const showFormHandler =() =>{
        setShowForm(true);
    }
    const hideFormHandler = () =>{
        setShowForm(false);
    }

    return <div className='new-expense'>
        {!showForm && <button onClick={showFormHandler}>Add New Expense</button>}
        {showForm && <ExpenseForm hideForm={hideFormHandler} onSubmitExpenseForm = {onSubmitExpenseFormHandler}/>}
    </div>
}
export default NewExpense;