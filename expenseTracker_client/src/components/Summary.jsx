import React from "react";

const Summary = ({totalBalance, totalIncome, totalExpense}) => {
  return (
    <>
     {/* Balance section */}
        <div className="balance-card">
          <h4>Your Balance</h4>
          <h1>${totalBalance}</h1>
        </div>

        {/* Income/Expense Summary */}
        <div className="inc-exp-container">
          <div className="money plus">
            <h4>INCOME</h4>
            <p>+${totalIncome}</p>
          </div>
          <div className="money minus">
            <h4>EXPENSE</h4>
            <p>-${totalExpense}</p>
          </div>
        </div>
    </>
  );
};

export default Summary;
