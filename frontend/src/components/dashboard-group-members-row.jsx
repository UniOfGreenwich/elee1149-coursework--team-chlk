import "../styles/dashboard-group-members.css";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import SettlePayment from "./settle-payment";


export function GroupMembersRow(props) {
  const [modalType, setModalType] = useState(null); // null means no modal is open
  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null);

  const formattedBalance = Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP", minimumFractionDigits: 2, maximumFractionDigits: 2}).format(Math.abs(props.balance));
  return (
    <div className="group-members-row" onClick={() => openModal("SettlePayment")}>
      <p className="member-name">{props.name}</p>
      <p className="status">{props.status}</p>
      <p
        className="balance"
        id="balance"
        style={{
          color:
            props.balance > 0
              ? "#4495C7"
              : props.balance < 0
              ? "#FE6789"
              : "white",
        }}
      >
        {formattedBalance}
      </p>
      {modalType === "SettlePayment" && (
        <SettlePayment
          userId={props.currentUser}
          groupId={props.groupId}
          closeModal={closeModal}
          recipient={props.user}
          balance={props.balance}
        />
      )}
    </div>
  );
}
