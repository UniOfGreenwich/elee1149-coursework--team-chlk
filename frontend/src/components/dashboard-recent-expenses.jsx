import "../styles/dashboard-recent-expenses.css"
import { RecentExpensesRow } from "./dashboard-recent-expenses-row";

const data = [
  {
    "expenseName": "GTR 5",
    "category": "Gadget & Gear",
    "date": "12th Jan 2025",
    "userPaid": 10,
    "userLent": 5,
    "payerName": "Hamza",
  },
  {
    "expenseName": "GTR 5",
    "category": "Travel",
    "date": "27th Dec 2024",
    "userPaid": 40,
    "userLent": 15,
    "payerName": "Lewis",
  }
];

export function RecentExpenses() {
  return (
    <div className="dashboard-grid-component">
      <h2 className="component-title">Recent Expenses</h2>
      <div className="component-options">
        <p className="all-expenses">All</p>
      </div>
            <ul>
              {data.map((e) => (
                <li key={e.date}>
                  <RecentExpensesRow
                    expenseName={e.expenseName}
                    category={e.category}
                    date={e.date}
                    userPaid={e.userPaid}
                    userLent={e.userLent}
                    payerName={e.payerName}
                  />
                </li>
              ))}
            </ul>
    </div>
  );
}



