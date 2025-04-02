import "../styles/dashboard-recent-expenses.css"
import categories from "../data/category-map"
import {format} from "date-fns"

export function ExpensesListItem(props) {
    const foundCategory = categories.find(category => category.categoryId === props.category)
    const userSplit = !props.split.find(item => item.userId.toString() === props.currentUser) ? 0 : props.split.find(item => item.userId.toString() === props.currentUser)
    const nonUserSplit = props.split.filter(item => item.userId.toString() !== props.currentUser).reduce((accumulator, currentAmount) => {
        return accumulator + currentAmount.shareAmount;
    }, 0)
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
        <div className="expense-group">
            <p className="expense-group-title">group:</p>
            <p className="expense-group-name">{props.groupName}</p>
        </div>
        <p className="expense-date">{format(props.date, "dd MMM yyyy")}</p>
        <div className="expense-values">
            <div className="total-expense">
                <p className="expense-amount">£{props.userPaid.toFixed(2)}</p>
                <p className="expense-payer">{props.payerId.toString() === props.currentUser ? "You" : props.payerName} Paid</p>
            </div>
            <div className="expense-split">
                <p className="split-amount"
                id="split-amount"
                style={{
                  color:
                    props.payerId.toString() === props.currentUser
                      ? "#4495C7"
                      : !userSplit
                      ? "white"
                      : "#FE6789",
                }}
                >
                {props.payerId.toString() === props.currentUser ? "£" + nonUserSplit.toFixed(2) : !userSplit ? "-" : "£" + userSplit.shareAmount.toFixed(2)}
                </p>
                <p className="expense-payer">{props.payerId.toString() === props.currentUser ? "You Lent" : !userSplit ? "" : "You Borrowed"}</p>
            </div>
        </div>
      </div>
    );
  }