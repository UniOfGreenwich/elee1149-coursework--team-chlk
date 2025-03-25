import "../styles/dashboard-recent-expenses.css";
import categories from "../data/category-map";
import { format } from "date-fns";

export function RecentExpensesRow(props) {
  const foundCategory = categories.find(
    (category) => category.categoryId === props.category
  );
  const userSplit = !props.split.find(
    (item) => item.userId === props.currentUser
  )
    ? 0
    : props.split.find((item) => item.userId === props.currentUser);
  const nonUserSplit = props.split
    .filter((item) => item.userId !== props.currentUser)
    .reduce((accumulator, currentAmount) => {
      return accumulator + currentAmount.shareAmount;
    }, 0);
  return (
    <div className="recent-expenses-row">
      <div className="expense-details">
        <div className="category-tile">
          <img src={foundCategory.categoryIcon} alt="" />
        </div>
        <div className="expense-titles">
          <p className="expense-name">{props.expenseName}</p>
          <p className="category">{foundCategory.categoryName}</p>
        </div>
      </div>
      <p className="expense-date">{format(props.date, "dd MMM yyyy")}</p>
      <div className="expense-values">
        <div className="total-expense">
          <p className="expense-amount">£{props.userPaid.toFixed(2)}</p>
          <p className="expense-payer">
            {props.payerId === props.currentUser ? "You" : props.payerName} Paid
          </p>
        </div>
        <div className="expense-split">
          <p
            className="split-amount"
            id="split-amount"
            style={{
              color:
                props.payerId === props.currentUser
                  ? "#4495C7"
                  : !userSplit
                  ? "white"
                  : "#FE6789",
            }}
          >
            {props.payerId === props.currentUser
              ? "£" + nonUserSplit.toFixed(2)
              : !userSplit
              ? "-"
              : "£" + userSplit.shareAmount.toFixed(2)}
          </p>
          <p className="expense-payer">
            {props.payerId === props.currentUser
              ? "You Lent"
              : !userSplit
              ? ""
              : "You Borrowed"}
          </p>
        </div>
      </div>
    </div>
  );
}
