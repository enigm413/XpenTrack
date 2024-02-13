export function BalanceAmount({ balanceAmount }) {
  return (
    <div className="section-expense-details">
      <p className="expense-title">Balance Amount</p>
      <p className="expense-value">&#8377;{balanceAmount}</p>
    </div>
  );
}
