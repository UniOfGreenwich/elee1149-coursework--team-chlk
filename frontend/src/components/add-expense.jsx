import React, { useState, useEffect, useCallback } from "react";
import closeIcon from "../assets/close-icon.png";
import "../styles/quick-action-buttons.css";
import categories from "../data/category-map";
import { AddExpenseRequest, GroupMembersData } from "../methods/use-axios.ts";
import PropTypes from 'prop-types';
import { showErrorToast, showSuccessToast } from "../methods/http-error-handler";

const AddExpense = ({ closeModal, userId, groupId, reload}) => {
  const [trigger, setTrigger] = useState(false)
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [shareOption, setShareOption] = useState("equal");
  const [customAmounts, setCustomAmounts] = useState({});
  const [splitAmounts, setSplitAmounts] = useState({});
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(null);
  const [date, setDate] = useState("");
  const [currency, setCurrency] = useState("GBP");

  const [loading, data, error, request] = GroupMembersData(groupId, userId);

  const filteredUsers = data.filter(
    (user) => user.userId !== parseInt(userId, 10)
  );

  const handleUserSelection = (e) => {
    const selectedUserIds = Array.from(e.target.selectedOptions, (option) =>
      parseInt(option.value)
    );
    const selectedUserObjects = filteredUsers.filter((user) =>
      selectedUserIds.includes(user.userId)
    );
    setSelectedUsers(selectedUserObjects);

    if (shareOption === "equal") {
      splitEqually(selectedUserObjects, amount);
    }
  };

  const handleShareOptionChange = (e) => {
    setShareOption(e.target.value);

    if (e.target.value === "equal") {
      splitEqually(selectedUsers, amount);
    }
  };

  const handleCustomAmountChange = (userId, amount) => {
    setCustomAmounts((prev) => ({
      ...prev,
      [userId]: amount,
    }));
  };

  const handleAmountChange = (e) => {
    const newAmount = parseFloat(e.target.value) || 0;
    setAmount(newAmount);

    if (shareOption === "equal") {
      splitEqually(selectedUsers, newAmount);
    }
  };

  const splitEqually = (selectedUsers, totalAmount) => {
    if (selectedUsers.length === 0 || totalAmount === 0) {
      setSplitAmounts({});
      return;
    }

    const equalShare = (totalAmount / (selectedUsers.length + 1)).toFixed(2);
    const splitData = {};
    selectedUsers.forEach((user) => {
      splitData[user.userId] = equalShare;
    });

    setSplitAmounts(splitData);
  };

  const userShares = selectedUsers.map((user) => ({
    userId: user.userId,
    shareAmount:
      shareOption === "equal"
        ? parseFloat(splitAmounts[user.userId] || 0) 
        : parseFloat(customAmounts[user.userId] || 0), 
  }));

  const formattedDate = date === "" ? "" : new Date(date).toISOString();

  const expenseData = {
    description: description, 
    amount: parseFloat(amount), 
    currency: currency,
    date: formattedDate, 
    categoryId: category,
    groupId: parseInt(groupId),
    userId: parseInt(userId),
    userShares: userShares,
  };

  const [newExpenseLoading, newExpenseData, newExpenseError, newExpenseRequest] = AddExpenseRequest(userId, expenseData)

  if(newExpenseData && JSON.stringify(newExpenseData) !== '[]' ) {
      if(newExpenseData.success) {
        showSuccessToast(newExpenseData.message)
      } else {
        showErrorToast(newExpenseData.message)
      }
      reload();
      closeModal();
    }  

  const sendExpense = useCallback(() => {
    newExpenseRequest()
    })

  useEffect(() => {
    if (trigger) {
      sendExpense()
      setTrigger(false)
    }
  }, [trigger]) 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isNaN(amount) || amount <= 0) {
      showErrorToast("Please enter an amount above 0");
      return;
    }
    setTrigger(true)
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h3 className="action-title">Add Expense</h3>
        <div className="modal-content">
          <form className="action-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="user" className="expense-user">
                Select Users:
              </label>
              <select
                required
                className="expense-user-field"
                multiple
                onChange={handleUserSelection}
              >
                {filteredUsers.map((user) => (
                  <option key={user.userId} value={user.userId}>
                    {user.firstName} {user.lastName}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-row settle-container">
              <p className="settlement-option">Share Option:</p>
              <div className="radio-inputs">
                <div className="radio-input">
                  <input
                    type="radio"
                    id="equal"
                    value="equal"
                    name="share"
                    checked={shareOption === "equal"}
                    onChange={handleShareOptionChange}
                  />
                  <label htmlFor="equal">Equal</label>
                </div>

                <div className="radio-input">
                  <input
                    type="radio"
                    id="custom"
                    value="custom"
                    name="share"
                    checked={shareOption === "custom"}
                    onChange={handleShareOptionChange}
                  />
                  <label htmlFor="custom">Custom</label>
                </div>
              </div>
            </div>
            <div className="form-row">
              <label htmlFor="description" className="expense-description">
                Expense Name:
              </label>
              <input
                type="text"
                id="description"
                placeholder="Enter Description"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="form-row">
              <label htmlFor="category">Choose Category: </label>
              <select
                name="category"
                id="category"
                className="expense-category"
                required
                value={category || ""}
                onChange={(e) => setCategory(parseInt(e.target.value))}
              >
                <option value="" disabled>
                  Select Category
                </option>
                {categories
                  .filter((cat) => cat.categoryId !== 6)
                  .map((cat) => (
                    <option key={cat.categoryId} value={cat.categoryId}>
                      {cat.categoryName}
                    </option>
                  ))}
              </select>
            </div>

            <div className="form-row">
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="form-row">
              <label htmlFor="amount" className="expense-description">
                Amount:
              </label>
              <input
                type="number"
                id="amount"
                placeholder="Enter Amount"
                value={amount}
                onChange={handleAmountChange}
                required
              />
            </div>

            {shareOption === "custom" && selectedUsers.length > 0 && (
              <div className="custom-amounts">
                <h4 className="action-title">Custom Amounts</h4>
                {selectedUsers.map((user) => (
                  <div key={user.userId} className="custom-amount-input">
                    <label className="custom-user-name">
                      {user.firstName} {user.lastName}
                    </label>
                    <input
                      className="custom-amount-field"
                      type="number"
                      placeholder="Enter Custom Amount"
                      value={customAmounts[user.userId] || ""}
                      onChange={(e) =>
                        handleCustomAmountChange(user.userId, e.target.value)
                      }
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="form-row">
              <p className="selected-users">
                <span className="selected-users-title">Selected Users:</span>{" "}
                {selectedUsers
                  .map((user) => `${user.firstName} ${user.lastName}`)
                  .join(", ")}
              </p>
            </div>

            {shareOption === "equal" && selectedUsers.length > 0 && (
              <div className="selected-users">
                <p className="selected-users-title">Equal Split:</p>
                <ul>
                  {selectedUsers.map((user) => (
                    <li key={user.userId}>
                      {user.firstName} {user.lastName}: £
                      {splitAmounts[user.userId]
                        ? splitAmounts[user.userId]
                        : "0.00"}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="form-row">
              <input type="submit" value="Add Expense" />
            </div>
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

AddExpense.propTypes = {
  reload: PropTypes.func.isRequired,
}

export default AddExpense;
