import { useEffect, useState } from "react";
import "../styles/dashboard-recent-expenses.css"
import { RecentExpensesRow } from "./dashboard-recent-expenses-row";

const currentUserId = 1

export function RecentExpenses() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/expense/all-expenses?groupId=1") // fetching the data
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
    <div className="dashboard-grid-component">
      <h2 className="component-title">Recent Expenses</h2>
      <div className="component-options">
        <p className="all-expenses">All</p>
      </div>
            <ul>
              {data.map((e) => (
                <li key={e.expenseId}>
                  <RecentExpensesRow
                    currentUser = {currentUserId}
                    expenseName={e.description}
                    category={e.categoryId}
                    date={getDateFromString(e.date)}
                    userPaid={e.amount}
                    split={e.userShares}
                    payerId={e.userId}
                    payerName={e.userName}
                  />
                </li>
              ))}
            </ul>
    </div>
  );
}

const getDateFromString = (dateString) => {
  const [day, month, year] = dateString.split("-");
  return new Date(year, month -1, day, 0, 0, 0, 0)
}


