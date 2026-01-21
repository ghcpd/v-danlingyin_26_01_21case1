import './Transactions.css'

function Transactions({ transactions, onDeleteTransaction }) {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount)
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  if (transactions.length === 0) {
    return (
      <div className="transactions">
        <h3 className="transactions-title">Transaction History</h3>
        <div className="no-transactions">
          <p>No transactions yet. Add your first transaction above!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="transactions">
      <h3 className="transactions-title">Transaction History</h3>
      
      <div className="transactions-list">
        {transactions.map(transaction => (
          <div 
            key={transaction.id} 
            className={`transaction-item ${transaction.type.toLowerCase()}`}
          >
            <div className="transaction-indicator"></div>
            
            <div className="transaction-details">
              <div className="transaction-main">
                <span className="transaction-category">{transaction.category}</span>
                <span className="transaction-date">{formatDate(transaction.date)}</span>
              </div>
              <span className="transaction-type-badge">{transaction.type}</span>
            </div>
            
            <div className="transaction-amount">
              <span className={transaction.type === 'Income' ? 'positive' : 'negative'}>
                {transaction.type === 'Income' ? '+' : '-'}{formatCurrency(transaction.amount)}
              </span>
            </div>
            
            <button 
              className="delete-btn"
              onClick={() => onDeleteTransaction(transaction.id)}
              aria-label="Delete transaction"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Transactions
