import "../styles/dashboard-recent-expenses.css"
import categories from "../data/category-map"
import {format} from "date-fns"

export function ExpensesListItem(props) {
    const foundCategory = categories.find(category => category.categoryId === props.category)
    const userSplit = !props.split.find(item => item.userId.toString() === props.currentUser) ? 0 : props.split.find(item => item.userId.toString() === props.currentUser)
    const nonUserSplit = props.split.filter(item => item.userId.toString() !== props.currentUser).reduce((accumulator, currentAmount) => {
        return accumulator + currentAmount.shareAmount;
    }, 0)

    const settlementCategoryId = 6

    return (
        <div className="recent-expenses-row">
        <div className="expense-details">
          { props.category !== settlementCategoryId ?
            <div className="category-tile">
              <img src={foundCategory.categoryIcon} alt="" />
            </div>
          : null}
          <div className="expense-titles">
              <p className={"expense-name" + (props.category === settlementCategoryId ? "-settlement" : "")}>{props.expenseName}</p>
              { props.category !== settlementCategoryId ?
                <p className="category">{foundCategory.categoryName}</p>
              : null}
          </div>
        </div>
        <div className="expense-group">
            <p className={"expense-group-title" + (props.category === settlementCategoryId ? "-settlement" : "")}>group:</p>
            <p className={"expense-group-name" + (props.category === settlementCategoryId ? "-settlement" : "")}>{props.groupName}</p>
            </div>
        <p className={"expense-date" + (props.category === settlementCategoryId ? "-settlement" : "")}>{format(props.date, "dd MMM yyyy")}</p>
        <div className="expense-values">
            <div className="total-expense">
                <p className={"expense-amount" + (props.category === settlementCategoryId ? "-settlement" : "")}>{Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP", minimumFractionDigits: 2, maximumFractionDigits: 2}).format(props.userPaid)}</p>
                <p className={"expense-payer" + (props.category === settlementCategoryId ? "-settlement" : "")}>{props.payerId.toString() === props.currentUser ? "You" : props.payerName} Paid</p>
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
                {props.payerId.toString() === props.currentUser ? Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP", minimumFractionDigits: 2, maximumFractionDigits: 2}).format(nonUserSplit) : !userSplit ? "-" : Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP", minimumFractionDigits: 2, maximumFractionDigits: 2}).format(userSplit.shareAmount)}
                </p>
                <p className="expense-payer">{props.payerId.toString() === props.currentUser ? "You Lent" : !userSplit ? "" : "You Borrowed"}</p>
            </div>
        </div>
      </div>
    );
  }