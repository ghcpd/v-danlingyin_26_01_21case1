import './Overview.css'

function Overview({ totalIncome, totalExpenses, currentBalance }) {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount)
  }

  return (
    <div className="overview">
      <h2 className="overview-title">Financial Overview</h2>
      
      <div className="overview-cards">
        <div className="overview-card income">
          <div className="card-icon">↑</div>
          <div className="card-content">
            <span className="card-label">Total Income</span>
            <span className="card-value">{formatCurrency(totalIncome)}</span>
          </div>
        </div>

        <div className="overview-card expense">
          <div className="card-icon">↓</div>
          <div className="card-content">
            <span className="card-label">Total Expenses</span>
            <span className="card-value">{formatCurrency(totalExpenses)}</span>
          </div>
        </div>

        <div className="overview-card balance">
          <div className="card-icon">$</div>
          <div className="card-content">
            <span className="card-label">Current Balance</span>
            <span className={`card-value ${currentBalance >= 0 ? 'positive' : 'negative'}`}>
              {formatCurrency(currentBalance)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
