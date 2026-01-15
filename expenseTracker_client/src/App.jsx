import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../src/components/Header";
import Summary from "../src/components/Summary";
import History from "../src/components/History";
import TransactionForm from "../src/components/TransactionForm";
import PieChart from "../src/components/PieChart";

import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(true);
  const [successMsg, setSuccessMsg] = useState("");

  const fetchExpenses = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://expense-app-backend-ozaa.onrender.com/expenses`
      );
      setExpenses(res.data);
      // setError("");
      setLoading(false)
    } catch (error) {
      // setExpenses([]);
      setLoading(false);
      console.log("Silent Error: DataBase is offline", error);
    }
  };

  // delete
  const deleteExpense = async (id, title) => {
  
    try {
      await axios.delete(
        `https://expense-app-backend-ozaa.onrender.com/expenses/${id}`
      );
      setSuccessMsg(`${title} deleted successfully!`)
      fetchExpenses();
      setTimeout(() => setSuccessMsg(""), 3000);
    } catch (err) {
      setError("Could not delete Item.", err);
    }
  };

  // update
  const updateExpense = async (id, updatedData) => {
    const { type } = expenses.find((item) => item._id === id);

    const newTitle = prompt("Enter new title: ");
    const newAmount = prompt("Enter new amount: ");
    try {
      if (newTitle && newAmount) {
        await axios.put(
          `https://expense-app-backend-ozaa.onrender.com/expenses/${id}`,
          {
            title: newTitle,
            amount: Number(newAmount),
            type,
          }
        );
        setSuccessMsg(`${updatedData.title} Product edited successfully!`)
        fetchExpenses();
        setTimeout(() => setSuccessMsg(""), 3000);
      }
    } catch (err) {
      setError("Update fail", err);
    }
  };

  // LOGIC SECTION
  const amounts = expenses.map((exp) =>
    exp.type === "income" ? exp.amount : -exp.amount
  );
  const totalBalance = amounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const totalIncome = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const totalExpense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  useEffect(() => {
    const loadData = async () => {
    await fetchExpenses(); //Displays the data immediately window loads
    };
    loadData();
  }, []);

  return (
    <>
      <div className="container">
        <Header />

        {loading ? (
          <div className="loader-container">
            <div className="spinner"></div>
            <p>Waking up server... please wait</p>
          </div>
        ) : (
          <>
            <Summary
              totalBalance={totalBalance}
              totalIncome={totalIncome}
              totalExpense={totalExpense}
            />

            <PieChart totalIncome={totalIncome} totalExpense={totalExpense} />
          </>
        )}

        <TransactionForm
          success={success}
          setSuccess={setSuccess}
          setError={setError}
          fetchExpenses={fetchExpenses}
        />

        {/* Error Message Box */}
        {error && <div className="error-toast">⚠️ {error}</div>}

        {/* success Message Box */}
        {successMsg && <div className="success-alert">{successMsg}</div>}

        <History
          expenses={expenses}
          updateExpense={updateExpense}
          deleteExpense={deleteExpense}
        />
      </div>
    </>
  );
}

export default App;
