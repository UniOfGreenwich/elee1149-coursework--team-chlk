import { useEffect, useState } from "react";
import "../styles/dashboard-top-categories.css"
import { TopCategoriesItem } from "./dashboard-top-categories-item";
import categories from "../data/category-map"
import { Link, useNavigate } from "react-router-dom";

export function TopCategories({userId, groupId, loading, data, error}) {

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
      <div className="component-content">
        <ul className="categories-grid">
          {categories.slice(0, 4).map((e) => (
            <li className="category-grid-item">
              <Link to={`${window.location.href}expenses?category=${e.categoryId}`}>
                <TopCategoriesItem
                  categoryId = {e.categoryId}
                  amount={data.filter(items => items.categoryId === e.categoryId).reduce((accumulator, currentAmount) => {
                    return accumulator + currentAmount.amount;
                  }, 0)}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
