import { useEffect, useState } from "react";
import "../styles/dashboard-recent-expenses.css";
import "../styles/dashboard-recent-expenses.css";
import { RecentExpensesRow } from "./dashboard-recent-expenses-row";

export function RecentExpenses({ userId, groupId }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/expense/all-expenses?groupId=${groupId}`) // fetching the data
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  console.log(data); //printing the data to the console

  return (
    <div className="dashboard-grid-component scroll">
      <div className="dashboard-grid-component scroll">
        <h2 className="component-title">Recent Expenses</h2>
        <div className="component-options">
          <p className="all-expenses">All</p>
        </div>
        <ul>
          {data.map((e) => (
            <li key={e.expenseId}>
              <RecentExpensesRow
                currentUser={userId}
                expenseName={e.description}
                category={e.categoryId}
                date={e.date}
                userPaid={e.amount}
                split={e.userShares}
                payerId={e.userId}
                payerName={e.userName}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
