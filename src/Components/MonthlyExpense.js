export function MonthlyExpense({ monthlyExpense }) {
  return (
    <div className="section-expense-details">
      <p className="expense-title">Monthly Expense</p>
      <p className="expense-value">&#8377;{monthlyExpense}</p>
    </div>
  );
}
