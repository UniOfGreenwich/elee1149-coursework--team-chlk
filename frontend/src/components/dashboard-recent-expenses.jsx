import "../styles/dashboard-recent-expenses.css"
import { RecentExpensesRow } from "./dashboard-recent-expenses-row";

const currentUserId = 1

const data = [
  {
    "expenseId": 15,
    "description": "Groceries",
    "amount": 100.0,
    "currency": "USD",
    "date": "30-09-2023",
    "categoryId": 1,
    "groupId": 1,
    "userId": 1,
    "userShares": [
      {
        "id": 1,
        "userId": 1,
        "expenseId": 15,
        "shareAmount": 50.0
      },
      {
        "id": 2,
        "userId": 2,
        "expenseId": 15,
        "shareAmount": 50.0
      }
    ]
  },
  {
    "expenseId": 16,
    "description": "Groceries",
    "amount": 100.0,
    "currency": "USD",
    "date": "30-09-2023",
    "categoryId": 2,
    "groupId": 1,
    "userId": 2,
    "userShares": [
      {
        "id": 3,
        "userId": 1,
        "expenseId": 16,
        "shareAmount": 50.0
      },
      {
        "id": 4,
        "userId": 2,
        "expenseId": 16,
        "shareAmount": 50.0
      }
    ]
  },
  {
    "expenseId": 17,
    "description": "Groceries",
    "amount": 100.0,
    "currency": "USD",
    "date": "30-09-2023",
    "categoryId": 3,
    "groupId": 1,
    "userId": 1,
    "userShares": [
      {
        "id": 5,
        "userId": 1,
        "expenseId": 17,
        "shareAmount": 50.0
      },
      {
        "id": 6,
        "userId": 2,
        "expenseId": 17,
        "shareAmount": 50.0
      }
    ]
  },
  {
    "expenseId": 18,
    "description": "Groceries",
    "amount": 100.0,
    "currency": "USD",
    "date": "30-09-2023",
    "categoryId": 4,
    "groupId": 1,
    "userId": 1,
    "userShares": [
      {
        "id": 7,
        "userId": 1,
        "expenseId": 18,
        "shareAmount": 50.0
      },
      {
        "id": 8,
        "userId": 2,
        "expenseId": 18,
        "shareAmount": 50.0
      }
    ]
  },
  {
    "expenseId": 19,
    "description": "Groceries",
    "amount": 100.0,
    "currency": "USD",
    "date": "30-09-2023",
    "categoryId": 5,
    "groupId": 1,
    "userId": 2,
    "userShares": [
      {
        "id": 9,
        "userId": 4,
        "expenseId": 19,
        "shareAmount": 50.0
      },
      {
        "id": 10,
        "userId": 2,
        "expenseId": 19,
        "shareAmount": 50.0
      }
    ]
  }
];

const getDateFromString = (dateString) => {
  const [day, month, year] = dateString.split("-");
  return new Date(year, month -1, day, 0, 0, 0, 0)
}

export function RecentExpenses() {
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
                    payerName={e.userId}
                  />
                </li>
              ))}
            </ul>
    </div>
  );
}



