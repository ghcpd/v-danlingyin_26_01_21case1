# Personal Finance Dashboard

A complete frontend application for tracking personal finances, built with React, TypeScript, and Vite.

## Features

- **Overview Section**: Displays total income, total expenses, and current balance
- **Transactions Section**: Add and view income/expense transactions
- **Automatic Calculations**: Overview values update automatically when transactions change
- **Date Sorting**: Transactions are sorted by date (latest first)
- **In-Memory State**: All data is stored in-memory (no persistence)

## Tech Stack

- React 18
- TypeScript
- Vite
- CSS3

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Usage

1. **Overview Page**: View your financial summary
   - Total Income
   - Total Expenses
   - Current Balance

2. **Transactions Page**: 
   - Add new transactions using the form
   - View all transactions sorted by date (newest first)
   - Each transaction shows:
     - Date
     - Category
     - Type (Income/Expense)
     - Amount

## Build for Production

To build the application for production:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Overview.tsx
│   │   ├── Overview.css
│   │   ├── Transactions.tsx
│   │   ├── Transactions.css
│   │   ├── TransactionForm.tsx
│   │   └── TransactionForm.css
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   └── types.ts
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```
