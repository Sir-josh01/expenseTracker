import React from "react";
import { useState } from "react";
import axios from 'axios'

const TransactionForm = ({success, setSuccess, setError, fetchExpenses}) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");

    // Add
  const addExpense = async (e) => {
    e.preventDefault();
    if (!title || !amount) return setError("Please fill all fields");
    const payLoad = {
      title,
      amount: Number(amount),
      type: type
    }
    console.log("payload being sent, check me out:", payLoad);
    
    try {
      await axios.post("https://expense-app-backend-ozaa.onrender.com/expenses", payLoad);

      setSuccess("Transaction added successfully! ✅");
      setTimeout(() => setSuccess(""), 3000);

      setTitle(""); // Clear the input
      setAmount(""); // Clear the input
      fetchExpenses();
      setError("");
    } catch (err) {
      console.log("backend says:", err.response?.data);
      setError("Action Blocked: Could not reach the database.");
      setTimeout(() => setError(""), 5000);
    }
  };

  return (
      <>
        {/* Add new transaction */}
        <form onSubmit={addExpense} className="input-group">
          
          {/* select drop down */}
          <select value={type} 
          onChange={(e) => setType(e.target.value)}>
            <option value="expense">Expense (Debit)</option>
            <option value="income">Income (Profit)</option>
          </select>

          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          {/* success message */}
          {success && <div className="success-toast"> {success} </div>}

          <button type="submit">Add Transaction</button>
        </form>
      </>
  );
};

export default TransactionForm;
