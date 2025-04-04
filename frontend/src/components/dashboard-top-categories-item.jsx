import "../styles/dashboard-top-categories.css"
import categories from "../data/category-map"
import arrowRight from "../assets/arrow-right.png"

export function TopCategoriesItem(props) {
    return (
        <div className="top-categories-item">
            <div className="category-tile">
                <img src={props.categoryIcon} alt="" />
            </div>
            <div className="category-details">
                <p className="category-name">{props.categoryName}</p>
                <p className="category-amount">{Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP", minimumFractionDigits: 2, maximumFractionDigits: 2}).format(props.amount)}</p>
            </div>
        </div>
    )
}