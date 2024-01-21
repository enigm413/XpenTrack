import { useState } from "react";
import { BalanceAmount } from "./BalanceAmount";
import { Footer } from "./Footer";
import { MonthlyExpense } from "./MonthlyExpense";
import { Navbar } from "./Navbar";
import { TransactionForm } from "./TransactionForm";
import { TransactionHistory } from "./TransactionHistory";

export default function App() {
  //Define necessary states for App
  const [isFormAvailable, setIsFormAvailable] = useState(false);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [paymentStatus, setPaymentStatus] = useState("Not Paid");
  const [transactionList, setTransactionList] = useState([]);

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
        setIsFormAvailable={setIsFormAvailable}
      />
      {isFormAvailable && (
        <TransactionForm
          description={description}
          amount={amount}
          paymentStatus={paymentStatus}
          setDescription={setDescription}
          setAmount={setAmount}
          setPaymentStatus={setPaymentStatus}
          setIsFormAvailable={setIsFormAvailable}
          onAddTransaction={handleAddTransactions}
        />
      )}
      <Footer />
    </div>
  );
}
