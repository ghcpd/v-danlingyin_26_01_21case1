# Personal Finance Dashboard

A simple, responsive personal finance dashboard built with React and Vite. Track your income and expenses with an intuitive interface.

## Features

- **Overview Section**: View total income, total expenses, and current balance at a glance
- **Transactions Section**: Add, view, and delete income/expense transactions
- **Transaction Details**: Each transaction includes date, amount, category, and type
- **Automatic Updates**: Overview values update automatically when transactions change
- **Sorted Display**: Transactions are sorted by date (latest first)
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

- React 18
- Vite 5
- CSS3 (no external UI libraries)

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

## Installation

1. Navigate to the project directory:
   ```bash
   cd personal-finance-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Preview Production Build

```bash
npm run preview
```

## Project Structure

```
personal-finance-dashboard/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── index.css
    ├── App.jsx
    ├── App.css
    └── components/
        ├── Overview.jsx
        ├── Overview.css
        ├── Transactions.jsx
        ├── Transactions.css
        ├── TransactionForm.jsx
        └── TransactionForm.css
```

## Notes

- Data is stored in-memory only (no persistence)
- No charts - numbers only display
- No authentication required
