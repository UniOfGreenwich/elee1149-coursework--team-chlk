import React from "react";

import closeIcon from "../assets/close-icon.png";

// importing styles
import "../styles/quick-action-buttons.css";

const AddExpense = ({ closeModal }) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h3 className="action-title">Add Expense</h3>
        <div className="modal-content">
          <form action="#" className="expense-form">
            <div className="form-row">
              <label htmlFor="user" className="expense-user">
                With you and:
              </label>
              <input
                type="text"
                id="user"
                required
                placeholder="Enter email or name"
              />
            </div>
            <div className="form-row">
              <label htmlFor="name" className="expense-name">
                Expense Name:
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter Expense Name"
                required
              />
            </div>
            <div className="form-row">
              <label htmlFor="description" className="expense-description">
                Description:
              </label>
              <input
                type="text"
                id="description "
                placeholder="Enter Description"
                required
              />
            </div>
            <div className="form-row">
              <label htmlFor="category">Choose Category: </label>
              <select
                name="category"
                id="category"
                className="expense-category"
                required
              >
                <option selected disabled value="">
                  Select Category
                </option>
                <option value="Transportation">Transportation</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Food and Drink">Food and Drink</option>
                <option value="Utilities">Utilities</option>
                <option value="Miscellaneous">Miscellaneous</option>
              </select>
            </div>
            <div className="form-row">
              <label htmlFor="amount" className="expense-description">
                Amount:
              </label>
              <input
                type="number"
                id="amount"
                placeholder="Enter Amount"
                required
              />
            </div>
            <div className="form-row">
              <label htmlFor="split" className="expense-split">
                Split Percentage:
              </label>
              <input
                type="number"
                id="split"
                placeholder="Enter Split Percentage"
                required
              />
            </div>
            <input type="submit" value="Add Expense" />
          </form>
        </div>
        <img
          onClick={closeModal}
          src={closeIcon}
          alt=""
          className="close-icon"
        />
      </div>
    </div>
  );
};

export default AddExpense;
