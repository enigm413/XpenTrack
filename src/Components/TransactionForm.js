export function TransactionForm({
  description,
  amount,
  paymentStatus,
  setDescription,
  setAmount,
  setPaymentStatus,
  setIsFormAvailable,
  onAddTransaction,
}) {
  //Defined current date
  const currentDate = new Date();

  //Define formatted date with date style as medium
  const formattedDate = (date) =>
    date.toLocaleDateString(undefined, { dateStyle: "medium" });

  //Function to handle submit form
  function handleSubmitForm(event) {
    event.preventDefault();

    //Return nothing if description and amount are falsy value
    if (!description && !amount) return;

    //Creating new transaction
    const newTransaction = {
      id: crypto.randomUUID(),
      expenseDate: formattedDate(currentDate),
      description,
      amount,
      paymentStatus,
    };

    onAddTransaction(newTransaction);

    //Resetting State
    setDescription("");
    setAmount(0);
    setPaymentStatus("Not Paid");
    setIsFormAvailable(false);
  }

  return (
    <div className="section-transaction-form">
      <form
        className="transaction-form grid grid-col-3"
        onSubmit={handleSubmitForm}
      >
        <h3 className="form-title">Transaction Form </h3>

        <label>Date of Expense</label>
        <input type="text" value={formattedDate(currentDate)} disabled />

        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <label>Amount</label>
        <input
          type="text"
          value={amount}
          onChange={(event) =>
            !isNaN(event.target.value) && setAmount(Number(event.target.value))
          }
        />

        <label>Payment Status</label>
        <select
          value={paymentStatus}
          onChange={(event) => setPaymentStatus(event.target.value)}
        >
          <option value="not paid">Not Paid</option>
          <option value="paid">Paid</option>
        </select>

        <button className="button submit">Submit</button>
      </form>
    </div>
  );
}
