import { Transaction } from '../types';
import './Transactions.css';

interface TransactionsProps {
  transactions: Transaction[];
}

function Transactions({ transactions }: TransactionsProps) {
  const sortedTransactions = [...transactions].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="transactions">
      <h2>Transaction History</h2>
      {sortedTransactions.length === 0 ? (
        <div className="no-transactions">No transactions yet</div>
      ) : (
        <div className="transactions-list">
          {sortedTransactions.map((transaction) => (
            <div 
              key={transaction.id} 
              className={`transaction-item ${transaction.type.toLowerCase()}`}
            >
              <div className="transaction-date">
                {new Date(transaction.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </div>
              <div className="transaction-details">
                <div className="transaction-category">{transaction.category}</div>
                <div className="transaction-type">{transaction.type}</div>
              </div>
              <div className={`transaction-amount ${transaction.type.toLowerCase()}`}>
                {transaction.type === 'Income' ? '+' : '-'}${transaction.amount.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Transactions;
