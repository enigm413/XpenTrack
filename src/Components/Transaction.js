export function Transaction({ transactionObj }) {
  return (
    <li className="transaction-list grid grid-col-5">
      <p className="transaction-list-title">Date</p>
      <p className="transaction-list-title">Description</p>
      <p className="transaction-list-title">Amount</p>
      <p className="transaction-list-title">Payment Status</p>
      <button className="button select">Select</button>
      <p className="transaction-list-value">{transactionObj.expenseDate}</p>
      <p className="transaction-list-value">{transactionObj.description}</p>
      <p className="transaction-list-value">{transactionObj.amount}</p>
      <p className="transaction-list-value">{transactionObj.paymentStatus}</p>
    </li>
  );
}
