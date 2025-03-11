import { useEffect, useState } from "react";
import "../styles/dashboard-top-categories.css"
import { TopCategoriesItem } from "./dashboard-top-categories-item";
import categories from "../data/category-map"

// const data = [
//   {
//     "categoryId": 1,
//     "amount": 250
//   },
//   {
//     "categoryId": 2,
//     "amount": 350
//   },
//   {
//     "categoryId": 3,
//     "amount": 80
//   },
//   {
//     "categoryId": 4,
//     "amount": 420
//   }
// ]

export function TopCategories() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/expense/all-expenses?groupId=1") // fetching the data
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  console.log(data); //printing the data to the console

  return (
    <div className="dashboard-grid-component">
      <h2 className="component-title">Top Categories</h2>
      <ul className="categories-grid">
        {categories.slice(0, 4).map((e) => (
          <li className="category-grid-item">
            <TopCategoriesItem
              categoryId = {e.categoryId}
              amount={data.filter(items => items.categoryId === e.categoryId).reduce((accumulator, currentAmount) => {
                return accumulator + currentAmount.amount;
              }, 0)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
