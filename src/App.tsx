import { useState } from 'react';
import { Transaction } from './types';
import Overview from './components/Overview';
import Transactions from './components/Transactions';
import TransactionForm from './components/TransactionForm';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: '1',
      date: '2026-01-20',
      amount: 3000,
      category: 'Salary',
      type: 'Income'
    },
    {
      id: '2',
      date: '2026-01-19',
      amount: 50,
      category: 'Groceries',
      type: 'Expense'
    },
    {
      id: '3',
      date: '2026-01-18',
      amount: 100,
      category: 'Utilities',
      type: 'Expense'
    }
  ]);

  const [activeSection, setActiveSection] = useState<'overview' | 'transactions'>('overview');

  const addTransaction = (transaction: Omit<Transaction, 'id'>) => {
    const newTransaction: Transaction = {
      ...transaction,
      id: Date.now().toString()
    };
    setTransactions([newTransaction, ...transactions]);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Personal Finance Dashboard</h1>
      </header>

      <nav className="nav">
        <button 
          className={activeSection === 'overview' ? 'active' : ''}
          onClick={() => setActiveSection('overview')}
        >
          Overview
        </button>
        <button 
          className={activeSection === 'transactions' ? 'active' : ''}
          onClick={() => setActiveSection('transactions')}
        >
          Transactions
        </button>
      </nav>

      <main className="main">
        {activeSection === 'overview' && <Overview transactions={transactions} />}
        {activeSection === 'transactions' && (
          <>
            <TransactionForm onAdd={addTransaction} />
            <Transactions transactions={transactions} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
