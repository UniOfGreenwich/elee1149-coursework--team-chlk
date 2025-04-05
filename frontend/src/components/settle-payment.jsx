// importing styles
import "../styles/quick-action-buttons.css";
import closeIcon from "../assets/close-icon.png";
import React, { useState, useEffect } from "react";
import { GroupMembersData } from "../methods/use-axios.ts";
import axios from "axios";

async function userSettlement(expenseDetails, userId) {
  return axios.post(
    `expense/add-expense?payerId=${userId}`,
    expenseDetails,
    {'Content-Type': 'application/json'}
  )
  .then(response => response.data)
}

const SettlePayment = ({ closeModal, userId, groupId, recipient=null, balance=null}) => {
  const [selectedRecipient, setSelectedRecipient] = useState(recipient ? recipient : null); // Selected recipient object
  const [amount, setAmount] = useState(""); // Amount field value
  const [settleOption, setSettleOption] = useState("outstanding"); // Radio button selection
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false); // State to disable button

  // getting the data
  const [loading, data, error, request] = GroupMembersData(groupId, userId)

  if (error) {
    console.log("Error fetching users:", error)
  }


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
    if (selectedRecipient && selectedRecipient.balance >= 0) {
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
    const selectedUser = data.find((user) => user.userId === userId);
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

    // handling amount error
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter an amount above 0");
      return;
    }

    if (!selectedRecipient) {
      alert("Please select a recipient.");
      return;
    }

    const today = new Date().toISOString()

    // formatting the input data for payload to backend
    const payload = {
      "description": "Settling Payment",
      "amount": parseFloat(Math.abs(amount).toFixed(2)),
      "currency": "GBP",
      "date": today,
      "categoryId": 6, // to be set to 6 once db is updated
      "groupId": groupId, // dynamic group id
      "userId": userId, // The senders Id
      "userShares": [
        // for loop
        {
          userId: selectedRecipient.userId,
          shareAmount: parseFloat(Math.abs(amount).toFixed(2)), // Negative for recipient
        },
      ],
    };

    console.log(JSON.stringify(payload)); // Debugging

    const newSettlement = await userSettlement(payload, userId)
    if (newSettlement.success) {
      console.log("Settlement added successfully:", newSettlement)
      window.location.reload();
      closeModal();
    } else {
      console.log("Error adding Settlement:", newSettlement.message)
    }

    // sending the data to the backend end-point
    // try {
    //   const response = await fetch(
    //     `http://localhost:8080/expense/add-expense?payerId=${userId}`,
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(payload),
    //     }
    //   );

    //   if (!response.ok) {
    //     throw new Error("Failed to submit payment");
    //   }

    //   const data = await response.json();
    //   alert("Payment settled successfully!");
    //   closeModal(); // Close modal on success
    // } catch (error) {
    //   alert("An error occurred while processing your payment.");
    // }
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h3 className="action-title">Settle Payment</h3>
        <form className="action-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="recipient">Select Recipient:</label>
            <select id="recipient" onChange={handleRecipientChange}>
              <option value="">{recipient ? recipient.firstName : "-- Select a Recipient --"}</option>
              {data.filter(user => user.userId.toString() !== userId).map((user) => (
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
