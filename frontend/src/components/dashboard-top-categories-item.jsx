import "../styles/dashboard-top-categories.css"
import categories from "../data/category-map"
import arrowRight from "../assets/arrow-right.png"

export function TopCategoriesItem(props) {
    const foundCategory = categories.find(category => category.categoryId === props.categoryId)
    return (
        <div className="top-categories-item">
            <div className="category-tile">
                <img src={foundCategory.categoryIcon} alt="" />
            </div>
            <div className="category-details">
                <p className="category-name">{foundCategory.categoryName}</p>
                <p className="category-amount">£{props.amount.toFixed(2)}</p>
            </div>
        </div>
    )
}