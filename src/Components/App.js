import { useState } from "react";
import { BalanceAmount } from "./BalanceAmount";
import { Footer } from "./Footer";
import { MonthlyExpense } from "./MonthlyExpense";
import { Navbar } from "./Navbar";
import { TransactionForm } from "./TransactionForm";
import { TransactionHistory } from "./TransactionHistory";
import { PopUp } from "./PopUp";

export default function App() {
  //Define necessary states for App
  const [showTransactionForm, setShowTransactionForm] = useState(false);
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [transactionType, setTransactionType] = useState("expense");
  const [paymentStatus, setPaymentStatus] = useState("Not Paid");
  const [transactionList, setTransactionList] = useState([]);
  const [showPopUp, setShowPopUp] = useState(false);

  //Function to Add Transaction
  function handleAddTransactions(transaction) {
    if (
      transaction.transactionType === "expense" &&
      transaction.amount > balanceAmount &&
      transaction.paymentStatus === "paid"
    )
      return setShowPopUp(true);
    setTransactionList((transactionList) => [...transactionList, transaction]);
  }

  const balanceAmount = transactionList
    .filter((transaction) => transaction.paymentStatus === "paid")
    .reduce(
      (balanceAmount, transaction) =>
        transaction.transactionType === "income"
          ? balanceAmount + transaction.amount
          : balanceAmount - transaction.amount,
      0
    );

  const monthlyExpense = transactionList
    .filter(
      (transaction) =>
        transaction.transactionType === "expense" &&
        transaction.paymentStatus === "paid"
    )
    .reduce(
      (monthlyExpense, transaction) => monthlyExpense + transaction.amount,
      0
    );

  return (
    <div className="app">
      <Navbar />
      <div className="expense-container">
        <BalanceAmount balanceAmount={balanceAmount} />
        <MonthlyExpense monthlyExpense={monthlyExpense} />
      </div>

      <TransactionHistory
        transactionList={transactionList}
        setShowTransactionForm={setShowTransactionForm}
      />
      {showPopUp && <PopUp setShowPopUp={setShowPopUp} />}
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
