import { useEffect, useState } from "react";

// importing icons
import totalIOwe from "../assets/total-i-owe-icon.png";
import owedToMe from "../assets/owed-to-me-icon.png";

// importing Charts
import DoughnutChart from "./dashboard-overview-chart";

// importing style sheet
import "../styles/dashboard-overview.css";

export function Overview({userId, groupId}) {
  const date = getCurrentMonthYear();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let overallBalance = 0;
  let positiveBalance = 0;
  let negativeBalance = 0;

  // importing the data
  useEffect(() => {
    fetch(`http://localhost:8080/group/${groupId}/${userId}/users`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  // iterating through data to calculate balance
  data.forEach((e) => {
    console.log(e.balance);
    overallBalance += e.balance;
    if (e.balance > 0) {
      positiveBalance += e.balance;
    } else if (e.balance < 0) {
      negativeBalance += e.balance;
    }
  });

  // formatting the balance to 2 decimal place
  overallBalance = overallBalance.toFixed(2);
  positiveBalance = positiveBalance.toFixed(2);
  negativeBalance = Math.abs(negativeBalance).toFixed(2);

  console.log(typeof negativeBalance);

  return (
    <div className="dashboard-grid-component">
      <h2 className="component-title">Overview</h2>

      {/* Overall Container */}
      <div className="overall">
        <div className="overall-balance">£ {overallBalance}</div>
        <div className="date">{date}</div>
      </div>

      {/* Individual Container */}
      <div className="overview-details">
        <div className="individual-balances">
          <div className="owed-to-me">
            <div className="icon-container">
              <img src={owedToMe} alt="" className="icon" />
            </div>
            <div className="content">
              <div className="sub-heading">Owed to me</div>
              <div className="amount blue">£{positiveBalance}</div>
            </div>
          </div>
          <div className="i-owe">
            <div className="icon-container">
              <img src={totalIOwe} alt="" className="icon" />
            </div>
            <div className="content">
              <div className="sub-heading">Total I Owe</div>
              <div className="amount red">£{negativeBalance}</div>
            </div>
          </div>
        </div>
        <div className="graph">
          <div className="chart">
            <DoughnutChart
              owe={parseFloat(negativeBalance)}
              owedToMe={parseFloat(positiveBalance)}
            />
          </div>
          <div className="legend">
            <p className="legend-title red">I Owe</p>
            <p className="legend-title blue">Owed to me</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function getCurrentMonthYear() {
  const date = new Date();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  return `${month}, ${year}`;
}
