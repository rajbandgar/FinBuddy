"use client"


import React, { useState } from 'react'
import Input from '../inputs/input'
import EmojiPickerPopUp from '../EmojiPickerPopUp'

const AddExpenseForm = ({onAddExpense}) => {

    const [income ,setIncome] = useState({
        category :"",
        amount :"",
        date :"",
        icon :""
    })

    const handleChange =(key,value)=>setIncome(
    {...income ,[key]: value }
    )
  return (
    <div>
        <EmojiPickerPopUp
            icon ={income.icon}
            onSelect={(selectedIcon)=> handleChange("icon" ,selectedIcon)} />


        <Input 
            value={income.category}
            onChange={({target}) => handleChange("category" ,target.value)}
            label="Category"
            placeholder="Rent Grocery ,etc"
            type="text" />

<Input 
            value={income.amount}
            onChange={({target}) => handleChange("amount" ,target.value)}
            label="Amount"
            placeholder=""
            type="number" />

<Input 
            value={income.date}
            onChange={({target}) => handleChange("date" ,target.value)}
            label="date"
            placeholder=""
            type="date" />

            <div className='flex justify-end mt-6'>
                <button type='button' className='add-btn add-btn-fill' onClick={()=> onAddExpense(income)}>Add Expense</button>
            </div>
      
    </div>
  )
}

export default AddExpenseForm
