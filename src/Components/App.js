import { useState } from "react";
import { BalanceAmount } from "./BalanceAmount";
import { Footer } from "./Footer";
import { MonthlyExpense } from "./MonthlyExpense";
import { Navbar } from "./Navbar";
import { TransactionForm } from "./TransactionForm";
import { TransactionHistory } from "./TransactionHistory";

export default function App() {
  //Define necessary states for App
  const [showTransactionForm, setShowTransactionForm] = useState(false);
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [transactionType, setTransactionType] = useState("expense");
  const [paymentStatus, setPaymentStatus] = useState("Not Paid");
  const [transactionList, setTransactionList] = useState([]);

  //Function to Add Transaction
  function handleAddTransactions(transaction) {
    setTransactionList((transactionList) => [...transactionList, transaction]);
  }

  return (
    <div className="app">
      <Navbar />

      <div className="expense-container">
        <BalanceAmount />
        <MonthlyExpense />
      </div>
      <TransactionHistory
        transactionList={transactionList}
        setShowTransactionForm={setShowTransactionForm}
      />
      {showTransactionForm && (
        <TransactionForm
          description={description}
          amount={amount}
          paymentStatus={paymentStatus}
          transactionType={transactionType}
          setDescription={setDescription}
          setAmount={setAmount}
          setPaymentStatus={setPaymentStatus}
          setTransactionType={setTransactionType}
          setShowTransactionForm={setShowTransactionForm}
          onAddTransaction={handleAddTransactions}
          transactionList={transactionList}
        />
      )}

      <Footer />
    </div>
  );
}
