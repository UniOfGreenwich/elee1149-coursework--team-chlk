import "../styles/dashboard-top-categories.css"
import categories from "../data/category-map"
import arrowRight from "../assets/arrow-right.png"

export function TopCategoriesItem(props) {
    const foundCategory = categories.find(category => category.categoryId === props.categoryId)
    return (
        <div className="top-categories-item">
            <img className="category-tile" src={foundCategory.categoryIcon} alt="" />
            <div className="category-details">
                <p className="category-name">{foundCategory.categoryName}</p>
                <p className="category-amount">£{props.amount.toFixed(2)}</p>
            </div>
            <img className="category-button" src={arrowRight} alt="" />
        </div>
    )
}