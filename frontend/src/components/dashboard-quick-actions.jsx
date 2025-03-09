import "../styles/dashboard-quick-actions.css";

export function QuickActions() {
  return (
    <div className="dashboard-grid-component">
      <h2 className="component-title">Quick Actions</h2>
      <div className="button-container">
        <button className="button add-expense">Add Expense</button>
        <button className="button settle-payment">Settle Payment</button>
      </div>
    </div>
  );
}
