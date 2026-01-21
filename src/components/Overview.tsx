import { Transaction } from '../types';
import './Overview.css';

interface OverviewProps {
  transactions: Transaction[];
}

function Overview({ transactions }: OverviewProps) {
  const totalIncome = transactions
    .filter(t => t.type === 'Income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter(t => t.type === 'Expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const currentBalance = totalIncome - totalExpenses;

  return (
    <div className="overview">
      <h2>Financial Overview</h2>
      <div className="overview-cards">
        <div className="overview-card income">
          <div className="card-label">Total Income</div>
          <div className="card-value">${totalIncome.toFixed(2)}</div>
        </div>
        <div className="overview-card expenses">
          <div className="card-label">Total Expenses</div>
          <div className="card-value">${totalExpenses.toFixed(2)}</div>
        </div>
        <div className="overview-card balance">
          <div className="card-label">Current Balance</div>
          <div className="card-value">${currentBalance.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
