export function TransactionFilterForm({ setIsFormAvailable }) {
  return (
    <div className="section-transaction-filter-form">
      <h3>Transaction History</h3>
      <div className="filter-contents">
        <select defaultValue="Sort By">
          <option>Sort By</option>
          <option>Date</option>
          <option>Description</option>
          <option>Amount</option>
        </select>

        <select>
          <option selected>Filter By</option>
          <option value="Paid">Paid</option>
          <option value="Not Paid">Not Paid</option>
        </select>

        <button className="button new" onClick={() => setIsFormAvailable(true)}>
          Add New Transaction
        </button>
      </div>
    </div>
  );
}
