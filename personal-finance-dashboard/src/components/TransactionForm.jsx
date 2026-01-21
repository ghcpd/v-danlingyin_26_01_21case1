import { useState } from 'react'
import './TransactionForm.css'

const categories = {
  Income: ['Salary', 'Freelance', 'Investment', 'Gift', 'Other Income'],
  Expense: ['Groceries', 'Utilities', 'Entertainment', 'Transport', 'Healthcare', 'Shopping', 'Other Expense'],
}

function TransactionForm({ onAddTransaction }) {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    amount: '',
    category: '',
    type: 'Expense',
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
      // Reset category when type changes
      ...(name === 'type' ? { category: '' } : {}),
    }))
    // Clear error when field is modified
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    
    if (!formData.date) {
      newErrors.date = 'Date is required'
    }
    
    if (!formData.amount || parseFloat(formData.amount) <= 0) {
      newErrors.amount = 'Please enter a valid amount'
    }
    
    if (!formData.category) {
      newErrors.category = 'Please select a category'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!validate()) return

    onAddTransaction({
      date: formData.date,
      amount: parseFloat(formData.amount),
      category: formData.category,
      type: formData.type,
    })

    // Reset form
    setFormData({
      date: new Date().toISOString().split('T')[0],
      amount: '',
      category: '',
      type: 'Expense',
    })
  }

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <h3 className="form-title">Add New Transaction</h3>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="type">Type</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={errors.date ? 'error' : ''}
          />
          {errors.date && <span className="error-text">{errors.date}</span>}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="amount">Amount ($)</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="0.00"
            step="0.01"
            min="0"
            className={errors.amount ? 'error' : ''}
          />
          {errors.amount && <span className="error-text">{errors.amount}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={errors.category ? 'error' : ''}
          >
            <option value="">Select category</option>
            {categories[formData.type].map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          {errors.category && <span className="error-text">{errors.category}</span>}
        </div>
      </div>

      <button type="submit" className="submit-btn">
        Add Transaction
      </button>
    </form>
  )
}

export default TransactionForm
