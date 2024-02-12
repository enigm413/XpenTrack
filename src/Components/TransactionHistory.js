import { useState } from "react";
import { Transaction } from "./Transaction";
import { TransactionFilterForm } from "./TransactionFilterForm";

export function TransactionHistory({
  setShowTransactionForm,
  transactionList,
}) {
  const [sortValue, setSortValue] = useState("date");

  let sortTransactionList;

  if (sortValue === "date") sortTransactionList = transactionList;
  else if (sortValue === "amount")
    sortTransactionList = transactionList
      .slice()
      .sort((a, b) => a.amount - b.amount);
  else
    sortTransactionList = transactionList
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  return (
    <div className="transaction-history">
      <TransactionFilterForm
        setShowTransactionForm={setShowTransactionForm}
        sortValue={sortValue}
        setSortValue={setSortValue}
      />
      <ol className="transaction-list">
        {transactionList.length === 0 ? (
          <p className="transaction-messages">
            No transaction done in this month
          </p>
        ) : (
          sortTransactionList.map((transaction) => (
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
