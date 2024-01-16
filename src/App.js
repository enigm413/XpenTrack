const initialTransaction = [
  {
    id: 1,
    date: "3 Jan 2024",
    description: "House Rent",
    amount: 5000,
    paymentStatus: "Not Paid",
  },
  {
    id: 2,
    date: "13 Jan 2024",
    description: "Ticket for movie theatre",
    amount: 500,
    paymentStatus: "Not Paid",
  },
  {
    id: 3,
    date: "15 Jan 2024",
    description: "Dinner at Resturant",
    amount: 300,
    paymentStatus: "Not Paid",
  },
  {
    id: 4,
    date: "23 Jan 2024",
    description: "Bike Insurance",
    amount: 10000,
    paymentStatus: "Not Paid",
  },
];

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <div></div>

      <div className="expense-container">
        <BalanceAmount />
        <MonthlyExpense />
      </div>

      <TransactionHistory />
      <TransactionForm />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav>
      <h1>XpenTracker</h1>
      <div className="user-container">
        <img src="Images\user.jpg" alt="Naim Ahamed" />
        <p>Jacob Jones</p>
      </div>
    </nav>
  );
}

function BalanceAmount() {
  return (
    <div className="section-expense-details">
      <p className="expense-title">Balance Amount</p>
      <p className="expense-value">&#8377;35000</p>
    </div>
  );
}

function MonthlyExpense() {
  return (
    <div className="section-expense-details">
      <p className="expense-title">Monthly Expense</p>
      <p className="expense-value">&#8377;15000</p>
    </div>
  );
}

function TransactionHistory() {
  return (
    <div className="transaction-history">
      <TransactionFilterForm />
      <ol className="transaction-list-container">
        {initialTransaction.map((transaction) => (
          <TransactionList
            transactionObj={transaction}
            key={initialTransaction.id}
          />
        ))}
      </ol>
    </div>
  );
}

function TransactionFilterForm() {
  return (
    <div className="section-transaction-filter-form">
      <h3>Transaction History</h3>
      <div className="filter-contents">
        <select>
          <option selected>Sort By</option>
          <option>Date</option>
          <option>Description</option>
          <option>Amount</option>
        </select>

        <select>
          <option selected>Filter By</option>
          <option>Paid</option>
          <option>Not Paid</option>
        </select>

        <button className="button new">Add New Transaction</button>
      </div>
    </div>
  );
}

function TransactionList({ transactionObj }) {
  return (
    <li className="transaction-list grid grid-col-5">
      <p className="transaction-list-title">Date</p>
      <p className="transaction-list-title">Description</p>
      <p className="transaction-list-title">Amount</p>
      <p className="transaction-list-title">Payment Status</p>
      <button className="button select">Select</button>
      <p className="transaction-list-value">{transactionObj.date}</p>
      <p className="transaction-list-value">{transactionObj.description}</p>
      <p className="transaction-list-value">{transactionObj.amount}</p>
      <p className="transaction-list-value">{transactionObj.paymentStatus}</p>
    </li>
  );
}

function TransactionForm() {
  return (
    <div className="section-transaction-form">
      <form className="transaction-form grid grid-col-3">
        <h3 className="form-title">Transaction Form </h3>

        <label>Date of Expense</label>
        <input type="date" />

        <label>Description</label>
        <input type="text" />

        <label>Amount</label>
        <input type="text" />

        <label>Payment Status</label>
        <select>
          <option>Paid</option>
          <option>Not Paid</option>
        </select>

        <button className="button submit">Submit</button>
      </form>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2022 XpnseTrack.India.Inc. All right rseserved</p>
    </footer>
  );
}
