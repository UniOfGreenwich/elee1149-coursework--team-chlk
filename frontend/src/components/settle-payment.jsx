import "../styles/quick-action-buttons.css";
import closeIcon from "../assets/close-icon.png";
import React, { useState, useEffect, useCallback } from "react";
import { AddExpenseRequest, GroupMembersData } from "../methods/use-axios.ts";
import PropTypes from 'prop-types';
import { showErrorToast, showSuccessToast } from "../methods/http-error-handler";

const SettlePayment = ({ closeModal, userId, groupId, recipient=null, reload}) => {
  const [trigger, setTrigger] = useState(false)
  const [selectedRecipient, setSelectedRecipient] = useState(recipient ? recipient : null);
  const [amount, setAmount] = useState("");
  const [settleOption, setSettleOption] = useState("outstanding");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  const [loading, data, error, request] = GroupMembersData(groupId, userId)

  useEffect(() => {
    if (selectedRecipient) {
      if (settleOption === "outstanding") {
        setAmount(
          selectedRecipient.balance < 0 ? selectedRecipient.balance : ""
        );
      } else {
        setAmount("");
      }
    }
  }, [selectedRecipient, settleOption]);

  useEffect(() => {
    if (selectedRecipient && selectedRecipient.balance >= 0) {
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

  const handleAmountChange = (e) => {
    let enteredAmount = Number(e.target.value);
    if (selectedRecipient && settleOption === "custom") {
      const maxAmount = Math.abs(selectedRecipient.balance);
      if (enteredAmount > maxAmount) {
        enteredAmount = maxAmount;
      }
    }
    setAmount(enteredAmount);
  };

  const today = new Date().toISOString()

  const payload = {
    description: "Settling Payment",
    amount: parseFloat(Math.abs(amount).toFixed(2)),
    currency: "GBP",
    date: today,
    categoryId: 6, 
    groupId: groupId, 
    userId: userId, 
    userShares: [
      {
        userId: selectedRecipient ? selectedRecipient.userId : null,
        shareAmount: parseFloat(Math.abs(amount).toFixed(2)),
      },
    ],
  };

  const [newSettlementLoading, newSettlementData, newSettlementError, newSettlementRequest] = AddExpenseRequest(userId, payload)

  if(newSettlementData && JSON.stringify(newSettlementData) !== '[]' ) {
        if(newSettlementData.success) {
          showSuccessToast("New settlement made!")
        } else {
          showErrorToast(newSettlementData.message)
        }
        reload();
        closeModal();
      }  
  
    const sendSettlement = useCallback(() => {
      newSettlementRequest()
      })
  
    useEffect(() => {
      if (trigger) {
        sendSettlement()
        setTrigger(false)
      }
    }, [trigger]) 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isNaN(amount) || amount <= 0) {
      showErrorToast("Please enter an amount above 0");
      return;
    }
    if (!selectedRecipient) {
      showErrorToast("Please select a recipient.");
      return;
    }
    setTrigger(true)
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

SettlePayment.propTypes = {
  reload: PropTypes.func.isRequired,
}

export default SettlePayment;
