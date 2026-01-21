import { Transaction } from '../types';
import './Transactions.css';

interface TransactionsProps {
  transactions: Transaction[];
  onDeleteTransaction: (id: string) => void;
}

function Transactions({ transactions, onDeleteTransaction }: TransactionsProps) {
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  if (transactions.length === 0) {
    return (
      <div className="transactions-container">
        <h2 className="transactions-title">Transaction History</h2>
        <p className="no-transactions">No transactions yet. Add your first transaction above.</p>
      </div>
    );
  }

  return (
    <div className="transactions-container">
      <h2 className="transactions-title">Transaction History</h2>
      
      <div className="transactions-list">
        <div className="transactions-header">
          <span>Date</span>
          <span>Category</span>
          <span>Type</span>
          <span>Amount</span>
          <span>Action</span>
        </div>

        {transactions.map((transaction) => (
          <div key={transaction.id} className="transaction-item">
            <span className="transaction-date">{formatDate(transaction.date)}</span>
            <span className="transaction-category">{transaction.category}</span>
            <span className={`transaction-type ${transaction.type.toLowerCase()}`}>
              {transaction.type}
            </span>
            <span className={`transaction-amount ${transaction.type.toLowerCase()}`}>
              {transaction.type === 'Income' ? '+' : '-'}
              {formatCurrency(transaction.amount)}
            </span>
            <button
              className="delete-btn"
              onClick={() => onDeleteTransaction(transaction.id)}
              aria-label="Delete transaction"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Transactions;
