# Personal Finance Dashboard

A simple personal finance tracking application built with React and TypeScript.

## Features

- **Overview Section**: Displays total income, total expenses, and current balance
- **Transactions Section**: 
  - Add new income or expense transactions
  - View transaction history sorted by date (latest first)
  - Delete transactions
- Each transaction includes:
  - Date
  - Amount
  - Category
  - Type (Income/Expense)
- All values update automatically when transactions change

## Tech Stack

- React 18
- TypeScript
- Vite
- CSS

## Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

## Installation

1. Navigate to the project directory:
   ```bash
   cd finance-dashboard
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

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
finance-dashboard/
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   ├── types.ts
│   └── components/
│       ├── Overview.tsx
│       ├── Overview.css
│       ├── TransactionForm.tsx
│       ├── TransactionForm.css
│       ├── Transactions.tsx
│       └── Transactions.css
└── README.md
```

## Notes

- Data is stored in-memory only (no persistence)
- Initial mock transactions are provided for demonstration
- No authentication required
