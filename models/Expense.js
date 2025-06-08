const mongoose = require("mongoose")


const ExpenseSchema = new mongoose.Schema({

    userId :{
        type:mongoose.Schema.Types.ObjectId,
        ref :"User",
        required:true
    },
    icon :{
        type:String,   
    },
    category :{
        type:String,
        required:true // Salary,Freelance etc
    },
    amount:{
        type:Number,
        required:true   
    },
    date:{
        type:Date,
        default:Date.now
    },},
    {timestamps:true})

   export default mongoose.models.Expense || mongoose.model("Expense", ExpenseSchema);