import { useState } from 'react'
import Overview from './components/Overview'
import Transactions from './components/Transactions'
import TransactionForm from './components/TransactionForm'
import './App.css'

// Initial mock data
const initialTransactions = [
  { id: 1, date: '2026-01-20', amount: 3500, category: 'Salary', type: 'Income' },
  { id: 2, date: '2026-01-19', amount: 150, category: 'Groceries', type: 'Expense' },
  { id: 3, date: '2026-01-18', amount: 500, category: 'Freelance', type: 'Income' },
  { id: 4, date: '2026-01-17', amount: 80, category: 'Utilities', type: 'Expense' },
  { id: 5, date: '2026-01-15', amount: 200, category: 'Entertainment', type: 'Expense' },
]

function App() {
  const [transactions, setTransactions] = useState(initialTransactions)
  const [activeSection, setActiveSection] = useState('overview')

  // Calculate derived state
  const totalIncome = transactions
    .filter(t => t.type === 'Income')
    .reduce((sum, t) => sum + t.amount, 0)

  const totalExpenses = transactions
    .filter(t => t.type === 'Expense')
    .reduce((sum, t) => sum + t.amount, 0)

  const currentBalance = totalIncome - totalExpenses

  // Add new transaction
  const addTransaction = (transaction) => {
    const newTransaction = {
      ...transaction,
      id: Date.now(),
    }
    setTransactions(prev => [...prev, newTransaction])
  }

  // Delete transaction
  const deleteTransaction = (id) => {
    setTransactions(prev => prev.filter(t => t.id !== id))
  }

  // Sort transactions by date (latest first)
  const sortedTransactions = [...transactions].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )

  return (
    <div className="app">
      <header className="app-header">
        <h1>Personal Finance Dashboard</h1>
        <nav className="nav-tabs">
          <button
            className={`nav-tab ${activeSection === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveSection('overview')}
          >
            Overview
          </button>
          <button
            className={`nav-tab ${activeSection === 'transactions' ? 'active' : ''}`}
            onClick={() => setActiveSection('transactions')}
          >
            Transactions
          </button>
        </nav>
      </header>

      <main className="app-main">
        {activeSection === 'overview' && (
          <Overview
            totalIncome={totalIncome}
            totalExpenses={totalExpenses}
            currentBalance={currentBalance}
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
  )
}

export default App
