import './Overview.css';

interface OverviewProps {
  totalIncome: number;
  totalExpenses: number;
  balance: number;
}

function Overview({ totalIncome, totalExpenses, balance }: OverviewProps) {
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <div className="overview">
      <h2 className="overview-title">Financial Overview</h2>
      
      <div className="overview-cards">
        <div className="overview-card income">
          <span className="card-label">Total Income</span>
          <span className="card-value">{formatCurrency(totalIncome)}</span>
        </div>

        <div className="overview-card expenses">
          <span className="card-label">Total Expenses</span>
          <span className="card-value">{formatCurrency(totalExpenses)}</span>
        </div>

        <div className={`overview-card balance ${balance >= 0 ? 'positive' : 'negative'}`}>
          <span className="card-label">Current Balance</span>
          <span className="card-value">{formatCurrency(balance)}</span>
        </div>
      </div>
    </div>
  );
}

export default Overview;
