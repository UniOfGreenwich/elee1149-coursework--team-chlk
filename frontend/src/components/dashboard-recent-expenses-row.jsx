import "../styles/dashboard-recent-expenses.css"
import categoryIconTemp from "../assets/groups-icon.png";
import categoryIcon from "../data/category-map"

export function RecentExpensesRow(props) {
    return (
      <div className="recent-expenses-row">
        <div className="expense-details">
            <img className="category-tile" src={categoryIcon.get(props.category)} alt="" />
            <div className="expense-titles">
                <p className="expense-name">{props.expenseName}</p>
                <p className="category">{props.category}</p>
            </div>
        </div>
        <p className="expense-date">{props.date}</p>
        <div className="expense-values">
            <div className="total-expense">
                <p className="expense-amount">£{props.userPaid.toFixed(2)}</p>
                <p className="expense-payer">{props.payerName} Paid</p>
            </div>
            <div className="expense-split">
                <p className="split-amount">£{props.userLent.toFixed(2)}</p>
                <p className="expense-payer">{props.payerName} Lent You</p>
            </div>
        </div>
      </div>
    );
  }

