import React from 'react'

const PieChart = ({ totalIncome, totalExpense}) => {

  const totalVolume = Number(totalIncome) + Number(totalExpense);
  const expensePercentage =
    totalVolume > 0 ? (totalExpense / totalVolume) * 100 : 0;
  const expenseDegrees = (expensePercentage * 3.6).toFixed(2);
  return (
    <>
     <div className="chart-section">
          <h3>Spending Overview</h3>

          <div
            className="pie-chart"
            style={{ "--deg": `${expenseDegrees}deg` }}
          >
            <div className="inner-circle">
              {Math.round(expensePercentage)}% Spent
            </div>
          </div>

          <div className="chart-labels">
            <span style={{ color: "#2ecc71" }}>● Income</span>
            <span style={{ color: "#c0392b" }}>● Expense</span>
          </div>
        </div>
      </>
  )
}

export default PieChart;