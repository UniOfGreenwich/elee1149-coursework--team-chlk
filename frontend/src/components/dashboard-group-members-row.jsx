import "../styles/dashboard-group-members.css";

export function GroupMembersRow(props) {
  const formattedBalance = Math.abs(props.balance).toFixed(2);
  return (
    <div className="group-members-row">
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
        £ {formattedBalance}
      </p>
    </div>
  );
}
