import "../styles/dashboard.css";
import { TopBar } from "../components/dashboard-topbar";
import { useParams } from "react-router-dom";
import { AllExpenseData } from "../methods/use-axios.ts";
import { ExpensesList } from "../components/expenses-list";
import "../styles/expenses.css";

export function Expenses() {
  let params = useParams();
  const [loading, data, error, request] = AllExpenseData(params.id);

  const groupFilteredData = !params.groupId
    ? data
    : data.filter((item) => item.groupId.toString() === params.groupId);

  const categoryFilteredData = !params.categoryId
    ? groupFilteredData
    : groupFilteredData.filter(
        (item) => item.categoryId.toString() === params.categoryId
      );

  return (
    <div className="dashboard-content">
      <div className="topbar">
        <TopBar pageName="Expenses" />
      </div>
      <div className="expenses-wrapper">
        <div className="expenses-header">
          <h1 className="expenses-title">Expenses</h1>
        </div>
        <div className="expenses-list-wrapper">
          <ul className="expenses-component">
            <li className="expenses-component-list">
              <ExpensesList
                userId={params.id}
                loading={loading}
                data={categoryFilteredData}
                error={error}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
