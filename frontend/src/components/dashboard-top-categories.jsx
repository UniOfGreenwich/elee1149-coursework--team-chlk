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

  if (data !== undefined) {
    categories.forEach(category => {
      category.amount = !data.filter(items => items.categoryId === category.categoryId) ? 0.00 : data.filter(items => items.categoryId === category.categoryId).reduce((accumulator, currentAmount) => {
        return accumulator + currentAmount.amount;
      }, 0.00)
    })
  }

  const sortedCategories = categories.sort((a,b) => a.amount - b.Amount).slice(0,4)

  console.log(sortedCategories)

  return (
    <div className="dashboard-grid-component">
      <h2 className="component-title">Top Categories</h2>
      <div className="component-content">
        <ul className="categories-grid">
          {sortedCategories.map((e) => (
            <li className="category-grid-item" key={e.categoryId}>
              <Link to={`${window.location.href}expenses?category=${e.categoryId}`}>
                <TopCategoriesItem
                  categoryIcon = {e.categoryIcon}
                  categoryName = {e.categoryName}
                  amount={e.amount}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
