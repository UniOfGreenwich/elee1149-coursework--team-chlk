import React, { useEffect, useState } from "react";
import "../styles/groups.css"
import { ExpensesListItem } from "./expenses-list-item.jsx";
import { Link, useNavigate } from "react-router-dom";

export function ExpensesList({userId, loading, data, error}) {

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  console.log(data); //printing the data to the console

  const sortedExpenses = data.sort((a,b) => new Date(a.date) - new Date(b.date)).reverse()


  return (
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
    </div>
  );
}


