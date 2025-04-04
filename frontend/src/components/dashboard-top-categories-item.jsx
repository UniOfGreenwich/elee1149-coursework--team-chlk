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
                <p className="category-amount">£{props.amount.toFixed(2)}</p>
            </div>
        </div>
    )
}