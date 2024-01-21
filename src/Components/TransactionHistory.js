import { Transaction } from "./Transaction";
import { TransactionFilterForm } from "./TransactionFilterForm";

export function TransactionHistory({ setIsFormAvailable, transactionList }) {
  return (
    <div className="transaction-history">
      <TransactionFilterForm setIsFormAvailable={setIsFormAvailable} />
      <ol className="transaction-list-container">
        {transactionList.length === 0 ? (
          <p className="transaction-messages">
            No transaction done in this month
          </p>
        ) : (
          transactionList.map((transaction) => (
            <Transaction
              transactionObj={transaction}
              key={transactionList.id}
            />
          ))
        )}
      </ol>
    </div>
  );
}
