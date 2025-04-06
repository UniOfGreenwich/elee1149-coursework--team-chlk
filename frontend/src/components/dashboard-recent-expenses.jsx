import "../styles/dashboard-recent-expenses.css";
import "../styles/dashboard-recent-expenses.css";
import { RecentExpensesRow } from "./dashboard-recent-expenses-row";
import chevron from "../assets/chevron-icon.png"
import { Link } from "react-router-dom";

export function RecentExpenses({userId, loading, data, error}) {

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Unable to load, see error</p>;
  }

  const sortedExpenses = data.sort((a,b) => new Date(a.date) - new Date(b.date)).reverse().slice(0,5)

  return (
    <div className="dashboard-grid-component">
      <div className="component-header">
        <h2 className="component-title">Recent Expenses</h2>
        <Link to={`${window.location.href}expenses`}>
          <div className="view-all-button">
            <p className="view-all">View All</p>
            <img src={chevron} alt="" />
          </div>
        </Link>
      </div>
      {data && JSON.stringify(data) !== '[]' ? 
      <div className="expense-list">
      <ul>
            {sortedExpenses.map((e) => (
              <li key={e.expenseId}>
                <RecentExpensesRow
                  currentUser = {userId}
                  expenseName={e.description}
                  category={e.categoryId}
                  date={e.date}
                  userPaid={e.amount}
                  split={e.userShares}
                  payerId={e.payerId}
                  payerName={e.userName}
                />
              </li>
            ))}
          </ul>
      </div> :
      <p className="no-data-message">No expenses have been added</p>
    }      
  </div>
  );
}
