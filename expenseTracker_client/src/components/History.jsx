import React from "react";

const History = ({expenses, updateExpense, deleteExpense}) => {

  return (
    <>
      <h3>History</h3>
      <div className="list-container">
        {[...expenses].reverse().map((expense) => (
          <div
            key={expense._id}
            className={`expense-item ${
              expense.type === "income" ? "border-green" : "border-red"
            }`}
          >
            <div className="item-info">
              <strong>{expense.title}</strong>
              <p
                className={
                  expense.type === "income" ? "money plus" : "money minus"
                }
              >
                {expense.type === "income" ? "+" : "-"}${expense.amount}
              </p>
            </div>
            <div className="actions">
              <button
                className="edit-btn"
                onClick={() => updateExpense(expense._id, expense.title)}
              >
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={() => deleteExpense(expense._id, expense.title)}
              >
                Delete transaction
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default History;
