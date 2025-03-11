import "../styles/quick-action-buttons.css";

import React, { useState, useEffect } from "react";

import closeIcon from "../assets/close-icon.png";

const SettlePayment = ({ closeModal }) => {
  const [users, setUsers] = useState([]); // List of users in the group
  const [selectedRecipient, setSelectedRecipient] = useState(null); // Selected recipient object
  const [amount, setAmount] = useState(""); // Amount field value
  const [settleOption, setSettleOption] = useState("outstanding"); // Radio button selection

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8080/group/1/1/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  // When a new recipient is selected, update the amount if 'Outstanding' is chosen
  useEffect(() => {
    if (selectedRecipient && settleOption === "outstanding") {
      setAmount(selectedRecipient.balance < 0 ? selectedRecipient.balance : "");
    }
  }, [selectedRecipient, settleOption]); // Runs when either recipient or settlement option changes

  const handleRecipientChange = (e) => {
    const userId = Number(e.target.value);
    const selectedUser = users.find((user) => user.userId === userId);
    setSelectedRecipient(selectedUser || null);
  };

  const handleSettleOptionChange = (e) => {
    setSettleOption(e.target.value);
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h3>Settle Payment</h3>
        <form className="expense-form">
          <div className="form-row">
            <label htmlFor="recipient">Select Recipient:</label>
            <select id="recipient" onChange={handleRecipientChange} required>
              <option value="">-- Select a Recipient --</option>
              {users.map((user) => (
                <option key={user.userId} value={user.userId}>
                  {user.firstName}
                </option>
              ))}
            </select>
          </div>

          {selectedRecipient && (
            <div className="balance-box">
              {selectedRecipient.balance > 0 ? (
                <p className="balance-message">
                  You owe {selectedRecipient.firstName} £
                  {selectedRecipient.balance}
                </p>
              ) : selectedRecipient.balance < 0 ? (
                <p className="balance-message">
                  {selectedRecipient.firstName} owes you £
                  {Math.abs(selectedRecipient.balance)}
                </p>
              ) : (
                <p className="balance-message">
                  No balance between you and {selectedRecipient.firstName}
                </p>
              )}
            </div>
          )}

          <div className="form-row">
            <p className="settlement-option">Settlement Option</p>
            <input
              type="radio"
              id="outstanding"
              value="outstanding"
              name="settle"
              checked={settleOption === "outstanding"}
              onChange={handleSettleOptionChange}
            />
            <label htmlFor="outstanding">Outstanding</label>

            <input
              type="radio"
              id="custom"
              value="custom"
              name="settle"
              checked={settleOption === "custom"}
              onChange={handleSettleOptionChange}
            />
            <label htmlFor="custom">Custom</label>
          </div>

          <div className="form-row">
            <label htmlFor="amount">Amount:</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min="0"
              placeholder={settleOption === "custom" ? "Enter amount" : ""}
              required
              disabled={settleOption === "outstanding"}
            />
          </div>

          <input type="submit" value="Settle Payment" />
        </form>
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

export default SettlePayment;
