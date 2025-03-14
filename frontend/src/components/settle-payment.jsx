// importing styles
import "../styles/quick-action-buttons.css";
import closeIcon from "../assets/close-icon.png";
import React, { useState, useEffect } from "react";

const SettlePayment = ({ closeModal }) => {
  const [users, setUsers] = useState([]); // List of users in the group
  const [selectedRecipient, setSelectedRecipient] = useState(null); // Selected recipient object
  const [amount, setAmount] = useState(""); // Amount field value
  const [settleOption, setSettleOption] = useState("outstanding"); // Radio button selection
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false); // State to disable button

  // getting the data
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

  // Update amount when recipient or settlement option changes
  useEffect(() => {
    if (selectedRecipient) {
      if (settleOption === "outstanding") {
        setAmount(
          selectedRecipient.balance < 0 ? selectedRecipient.balance : ""
        );
      } else {
        setAmount(""); // Clear input for 'custom'
      }
    }
  }, [selectedRecipient, settleOption]);

  // updating the submit button visibility based on selected group members
  useEffect(() => {
    if (selectedRecipient && selectedRecipient.balance > 0) {
      // alert(`${selectedRecipient.firstName} owes you money`);
      setIsSubmitDisabled(true);
      document.getElementById("submit").classList.add("hide");
    } else {
      setIsSubmitDisabled(false);
      document.getElementById("submit").classList.remove("hide");
    }
  }, [selectedRecipient]);

  const handleRecipientChange = (e) => {
    const userId = Number(e.target.value);
    const selectedUser = users.find((user) => user.userId === userId);
    setSelectedRecipient(selectedUser || null);
  };

  const handleSettleOptionChange = (e) => {
    setSettleOption(e.target.value);
  };

  // updating amount field if it exceeds outstanding balance
  const handleAmountChange = (e) => {
    let enteredAmount = Number(e.target.value);
    if (selectedRecipient && settleOption === "custom") {
      const maxAmount = Math.abs(selectedRecipient.balance); // Max you can pay is what you owe
      if (enteredAmount > maxAmount) {
        enteredAmount = maxAmount; // Prevent overpaying
      }
    }
    setAmount(enteredAmount); // Ensure the value updates correctly
  };

  //handling form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!selectedRecipient) {
      alert("Please select a recipient.");
      return;
    }

    // formatting the input data for payload to backend
    const payload = {
      description: "Settling Payment",
      amount: Math.abs(amount),
      currency: "GBP",
      date: new Date().toISOString(),
      categoryId: 5,
      groupId: 1, // Update as per group ID logic
      userId: selectedRecipient.userId, // The recipient's ID
      userShares: [
        {
          userId: 1, // user id of the logged in user
          shareAmount: Math.abs(amount),
        },
        {
          userId: selectedRecipient.userId,
          shareAmount: -Math.abs(amount), // Negative for recipient
        },
      ],
    };

    console.log(payload);

    // sending the data to the backend end-point
    try {
      const response = await fetch(
        "http://localhost:8080/expense/add-expense",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            payerId: "1", // Replace with actual payer ID dynamically
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit payment");
      }

      const data = await response.json();
      alert("Payment settled successfully!");
      closeModal(); // Close modal on success
    } catch (error) {
      console.error("Error submitting payment:", error);
      alert("An error occurred while processing your payment.");
    }
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h3 className="action-title">Settle Payment</h3>
        <form className="expense-form" onSubmit={handleSubmit}>
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
                <p className="balance-message alert">
                  Warning: {selectedRecipient.firstName} owes you £
                  {selectedRecipient.balance}. You can't settle payment.
                </p>
              ) : selectedRecipient.balance < 0 ? (
                <p className="balance-message">
                  You owe {selectedRecipient.firstName} £
                  {Math.abs(selectedRecipient.balance).toFixed(2)}
                </p>
              ) : (
                <p className="balance-message">
                  No outstanding balance between you and{" "}
                  {selectedRecipient.firstName}
                </p>
              )}
            </div>
          )}

          <div className="form-row settle-container">
            <p className="settlement-option">Settlement Option:</p>
            <div className="radio-inputs">
              <div className="radio-input">
                <input
                  type="radio"
                  id="outstanding"
                  value="outstanding"
                  name="settle"
                  checked={settleOption === "outstanding"}
                  onChange={handleSettleOptionChange}
                />
                <label htmlFor="outstanding">Outstanding</label>
              </div>

              <div className="radio-input">
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
            </div>
          </div>

          <div className="form-row">
            <label htmlFor="amount">Amount:</label>
            <input
              type="number"
              id="amount"
              value={Math.abs(amount)}
              onChange={handleAmountChange}
              min="0"
              max={selectedRecipient ? Math.abs(selectedRecipient.balance) : ""}
              placeholder={settleOption === "custom" ? "Enter amount" : ""}
              required
            />
          </div>
          {console.log("Selected recipient:", selectedRecipient)}
          {console.log("Balance:", selectedRecipient?.balance)}
          <input
            type="submit"
            value="Settle Payment"
            id="submit"
            disabled={isSubmitDisabled}
          />
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
