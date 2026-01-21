import { useState, useMemo } from 'react';
import { Transaction } from './types';
import Overview from './components/Overview';
import Transactions from './components/Transactions';
import TransactionForm from './components/TransactionForm';
import './App.css';

// Initial mock data
const initialTransactions: Transaction[] = [
  {
    id: '1',
    date: '2026-01-20',
    amount: 3000,
    category: 'Salary',
    type: 'Income',
  },
  {
    id: '2',
    date: '2026-01-19',
    amount: 150,
    category: 'Groceries',
    type: 'Expense',
  },
  {
    id: '3',
    date: '2026-01-18',
    amount: 500,
    category: 'Freelance',
    type: 'Income',
  },
  {
    id: '4',
    date: '2026-01-17',
    amount: 80,
    category: 'Utilities',
    type: 'Expense',
  },
  {
    id: '5',
    date: '2026-01-15',
    amount: 200,
    category: 'Entertainment',
    type: 'Expense',
  },
];

type ActiveSection = 'overview' | 'transactions';

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);
  const [activeSection, setActiveSection] = useState<ActiveSection>('overview');

  // Derived state: calculate totals
  const { totalIncome, totalExpenses, balance } = useMemo(() => {
    const income = transactions
      .filter((t) => t.type === 'Income')
      .reduce((sum, t) => sum + t.amount, 0);
    
    const expenses = transactions
      .filter((t) => t.type === 'Expense')
      .reduce((sum, t) => sum + t.amount, 0);

    return {
      totalIncome: income,
      totalExpenses: expenses,
      balance: income - expenses,
    };
  }, [transactions]);

  // Sort transactions by date (latest first)
  const sortedTransactions = useMemo(() => {
    return [...transactions].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, [transactions]);

  const addTransaction = (transaction: Omit<Transaction, 'id'>) => {
    const newTransaction: Transaction = {
      ...transaction,
      id: Date.now().toString(),
    };
    setTransactions((prev) => [...prev, newTransaction]);
  };

  const deleteTransaction = (id: string) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Personal Finance Dashboard</h1>
      </header>

      <nav className="app-nav">
        <button
          className={`nav-btn ${activeSection === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveSection('overview')}
        >
          Overview
        </button>
        <button
          className={`nav-btn ${activeSection === 'transactions' ? 'active' : ''}`}
          onClick={() => setActiveSection('transactions')}
        >
          Transactions
        </button>
      </nav>

      <main className="app-main">
        {activeSection === 'overview' && (
          <Overview
            totalIncome={totalIncome}
            totalExpenses={totalExpenses}
            balance={balance}
          />
        )}

        {activeSection === 'transactions' && (
          <div className="transactions-section">
            <TransactionForm onAddTransaction={addTransaction} />
            <Transactions
              transactions={sortedTransactions}
              onDeleteTransaction={deleteTransaction}
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
