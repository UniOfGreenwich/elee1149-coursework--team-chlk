import React, { useState, useEffect } from "react";

import closeIcon from "../assets/close-icon.png";

const SettlePayment = ({ closeModal }) => {
  const [users, setUsers] = useState([]);
  const [selectedRecipient, setSelectedRecipient] = useState("");
  // getting the user group data
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8080/group/1/1/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data); // Assuming the API returns an array of users
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h3 className="action-title">Settle Payment</h3>
        <div className="modal-content">
          <form action="#" className="expense-form">
            <div className="form-row">
              <label htmlFor="recipient">Select Recipient:</label>
              <select
                id="recipient"
                value={selectedRecipient}
                onChange={(e) => setSelectedRecipient(e.target.value)}
                required
              >
                <option value="">-- Select a Recipient --</option>
                {users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.firstName}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-row">
              <div className="balance-box"></div>
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
            <input type="submit" value="Settle Payment" />
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

export default SettlePayment;
