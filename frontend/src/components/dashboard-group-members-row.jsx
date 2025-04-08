import "../styles/dashboard-group-members.css";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import SettlePayment from "./settle-payment";


export function GroupMembersRow({name, status, balance, user, currentUser, groupId, reload  = () => null}) {

  const [modalType, setModalType] = useState(null);
  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null);

  const formattedBalance = Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP", minimumFractionDigits: 2, maximumFractionDigits: 2}).format(Math.abs(balance));
  return (
    <div className="group-members-row" onClick={() => openModal("SettlePayment")}>
      <p className="member-name">{name}</p>
      <p className="status">{status}</p>
      <p
        className="balance"
        id="balance"
        style={{
          color:
            balance > 0
              ? "#4495C7"
              : balance < 0
              ? "#FE6789"
              : "white",
        }}
      >
        {formattedBalance}
      </p>
      {modalType === "SettlePayment" && (
        <SettlePayment
          userId={currentUser}
          groupId={groupId}
          closeModal={closeModal}
          recipient={user}
          balance={balance}
          reload={reload}
        />
      )}
    </div>
  );
}
