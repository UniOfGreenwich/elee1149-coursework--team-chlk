import React from "react";
import "../styles/groups.css"
import { ExpensesListItem } from "./expenses-list-item.jsx";

export function ExpensesList({userId, loading, data, error}) {

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Unable to load, see error</p>;
  }

  const sortedExpenses = data.sort((a,b) => new Date(a.date) - new Date(b.date)).reverse()


  return (
    <div>
    {data && JSON.stringify(data) !== '[]' ? 
    <div>
      <ul>
        {sortedExpenses.map((e) => (
          <li key={e.expenseId}>
                <ExpensesListItem
                      currentUser = {userId}
                      expenseName={e.description}
                      category={e.categoryId}
                      date={e.date}
                      userPaid={e.amount}
                      split={e.userShares}
                      payerId={e.payerId}
                      payerName={e.userName}
                      groupName={e.groupName}
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


