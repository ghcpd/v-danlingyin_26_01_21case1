import { useState, FormEvent } from 'react';
import { Transaction, TransactionType } from '../types';
import './TransactionForm.css';

interface TransactionFormProps {
  onAddTransaction: (transaction: Omit<Transaction, 'id'>) => void;
}

const CATEGORIES = [
  'Salary',
  'Freelance',
  'Investment',
  'Groceries',
  'Utilities',
  'Entertainment',
  'Transportation',
  'Healthcare',
  'Shopping',
  'Other',
];

function TransactionForm({ onAddTransaction }: TransactionFormProps) {
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [amount, setAmount] = useState<string>('');
  const [category, setCategory] = useState<string>(CATEGORIES[0]);
  const [type, setType] = useState<TransactionType>('Income');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!date || !amount || !category) {
      return;
    }

    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      return;
    }

    onAddTransaction({
      date,
      amount: parsedAmount,
      category,
      type,
    });

    // Reset form
    setAmount('');
    setCategory(CATEGORIES[0]);
    setType('Income');
  };

  return (
    <div className="transaction-form-container">
      <h2 className="form-title">Add Transaction</h2>
      
      <form className="transaction-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="amount">Amount ($)</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              min="0.01"
              step="0.01"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="type">Type</label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value as TransactionType)}
              required
            >
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;
