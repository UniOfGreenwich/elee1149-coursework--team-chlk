import "../styles/dashboard-top-categories.css"
import { TopCategoriesItem } from "./dashboard-top-categories-item";

const data = [
  {
    "categoryId": 1,
    "amount": 250
  },
  {
    "categoryId": 2,
    "amount": 350
  },
  {
    "categoryId": 3,
    "amount": 80
  },
  {
    "categoryId": 4,
    "amount": 420
  }
]

export function TopCategories() {
  return (
    <div className="dashboard-grid-component">
      <h2 className="component-title">Top Categories</h2>
      <ul className="categories-grid">
        {data.map((e) => (
          <li className="category-grid-item">
            <TopCategoriesItem
              categoryId = {e.categoryId}
              amount={e.amount}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
