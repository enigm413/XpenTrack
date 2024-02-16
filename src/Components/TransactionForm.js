export function TransactionForm({
  description,
  amount,
  paymentStatus,
  transactionType,
  setDescription,
  setAmount,
  setPaymentStatus,
  setTransactionType,
  setShowTransactionForm,
  onAddTransaction,
}) {
  // Defined current date
  const currentDate = new Date().toLocaleDateString(undefined, {
    dateStyle: "medium",
  });

  //Function to handle submit form
  function handleSubmitForm(event) {
    event.preventDefault();

    //Return nothing if description and amount are falsy value
    if (!(description && amount)) return;

    //Creating new transaction
    const newTransaction = {
      id: crypto.randomUUID(),
      date: currentDate,
      description,
      amount,
      transactionType,
      paymentStatus,
    };
    console.log(newTransaction);

    onAddTransaction(newTransaction);

    //Resetting State
    setDescription("");
    setAmount(0);
    setPaymentStatus("not paid");
    setShowTransactionForm(false);
  }

  return (
    <div className="section-transaction-form">
      <form
        className="transaction-form grid grid-col-3"
        onSubmit={handleSubmitForm}
      >
        <h3 className="form-title">Transaction Form </h3>

        <label>Amount</label>
        <input
          type="text"
          value={amount}
          onChange={(event) =>
            !isNaN(event.target.value) && setAmount(Number(event.target.value))
          }
        />

        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <label>Transaction Type</label>
        <select
          value={transactionType}
          onChange={(event) => setTransactionType(event.target.value)}
        >
          <option value="expense">expense</option>
          <option value="income"> Income</option>
        </select>

        <label>Payment Status</label>
        <select
          value={paymentStatus}
          onChange={(event) => setPaymentStatus(event.target.value)}
        >
          <option value="not paid">not paid</option>
          <option value="paid">paid</option>
        </select>

        <button className="button submit">Submit</button>
      </form>
    </div>
  );
}
