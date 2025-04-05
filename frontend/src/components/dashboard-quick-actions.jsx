//importing styles
import "../styles/dashboard-quick-actions.css";

import React, { useState } from "react";

// importing components
import AddExpense from "./add-expense";
import SettlePayment from "./settle-payment";
import AddNewFriend from "./add-new-friend";
import AddNewGroup from "./add-new-group";

export function QuickActions({ userId, groupId = undefined }) {
  const [modalType, setModalType] = useState(null); // null means no modal is open

  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null);

  return (
    <div className="dashboard-grid-component">
      <h2 className="component-title">Quick Actions</h2>
      {groupId ? 
      <div className="button-container">
        <button
          onClick={() => openModal("AddExpense")}
          className="button add-expense"
        >
          Add Expense
        </button>
        <button
          onClick={() => openModal("SettlePayment")}
          className="button settle-payment"
        >
          Settle Payment
        </button>
      </div> :
      <div className="button-container">
      <button
        onClick={() => openModal("AddNewGroup")}
        className="button add-expense"
      >
        Add Group
      </button>
      <button
        onClick={() => openModal("AddNewFriend")}
        className="button settle-payment"
      >
        Add Friend
      </button>
    </div> }

      {/* Conditionally Render Modals */}
      {modalType === "AddExpense" && (
        <AddExpense userId={userId} groupId={groupId} closeModal={closeModal} />
      )}
      {modalType === "SettlePayment" && (
        <SettlePayment
          userId={userId}
          groupId={groupId}
          closeModal={closeModal}
        />
      )}
      {modalType === "AddNewFriend" && (
              <AddNewFriend userId={userId} groupId={groupId} closeModal={closeModal} />
            )}
            {modalType === "AddNewGroup" && (
                      <AddNewGroup
                        userId={userId}
                        groupId={groupId}
                        closeModal={closeModal}
                      />
                    )}
    </div>
  );
}
