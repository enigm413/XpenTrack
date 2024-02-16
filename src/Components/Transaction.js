export function Transaction({ transactionObj, onDeleteTransaction }) {
  return (
    <li className="transaction-item">
      <div className="transaction-item-container">
        <p className="transaction-item-title">Date</p>
        <p className="transaction-item-value">{transactionObj.date}</p>
      </div>

      <div className="transaction-item-container description">
        <p className="transaction-item-title">Description</p>
        <p className="transaction-item-value">{transactionObj.description}</p>
      </div>

      <div className="transaction-item-container">
        <p className="transaction-item-title">Amount</p>
        <p className="transaction-item-value">{transactionObj.amount}</p>
      </div>

      <div className="transaction-item-container">
        <p className="transaction-item-title">Transaction Type</p>
        <p className="transaction-item-value">
          {transactionObj.transactionType}
        </p>
      </div>

      <div className="transaction-item-container">
        <p className="transaction-item-title">Payment Status</p>
        <p className="transaction-item-value">{transactionObj.paymentStatus}</p>
      </div>
      <button
        className="button delete"
        onClick={() => onDeleteTransaction(transactionObj)}
      >
        Delete
      </button>
    </li>
  );
}
