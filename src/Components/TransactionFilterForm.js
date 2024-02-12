export function TransactionFilterForm({
  sortValue,
  setSortValue,
  setShowTransactionForm,
}) {
  return (
    <div className="section-transaction-filter-form">
      <h3>Transaction History</h3>
      <div className="filter-container">
        <label className="sort-by">Sort Order By</label>
        <select
          className="sort-by-options"
          value={sortValue}
          onChange={(event) => setSortValue(event.target.value)}
        >
          <option value="date">Date Of Entry</option>
          <option value="description">Description</option>
          <option value="amount">Amount</option>
        </select>
        <button
          className="button new"
          onClick={() => setShowTransactionForm(true)}
        >
          Add New Transaction
        </button>
      </div>
    </div>
  );
}
