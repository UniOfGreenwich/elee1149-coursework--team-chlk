import totalIOwe from "../assets/total-i-owe-icon.png";
import owedToMe from "../assets/owed-to-me-icon.png";
import DoughnutChart from "./dashboard-overview-chart";
import "../styles/dashboard-overview.css";

export function Overview({loading, data, error}) {
  const date = getCurrentMonthYear();
  let overallBalance = 0;
  let positiveBalance = 0;
  let negativeBalance = 0;


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Unable to load, see error</p>;
  }

  data.forEach((e) => {
    console.log(e.balance);
    overallBalance += e.balance;
    if (e.balance > 0) {
      positiveBalance += e.balance;
    } else if (e.balance < 0) {
      negativeBalance += e.balance;
    }
  });

  const status = getStatus(overallBalance)

  const formattedOverallBalance = Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP", minimumFractionDigits: 2, maximumFractionDigits: 2}).format(Math.abs(overallBalance));
  const formattedPositiveBalance = Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP", minimumFractionDigits: 2, maximumFractionDigits: 2}).format(Math.abs(positiveBalance));
  const formattedNegativeBalance = Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP", minimumFractionDigits: 2, maximumFractionDigits: 2}).format(Math.abs(negativeBalance));

  console.log(typeof negativeBalance);

  return (
    <div className="dashboard-grid-component">
      <h2 className="component-title">Overview</h2>

      <div className="overall">
        <div className="overall-information">
          <div className="overall-balance">{formattedOverallBalance}</div>
          <div className="overall-balance-status">{status}</div>
        </div>
        <div className="date">{date}</div>
      </div>

      <div className="overview-details">
        <div className="individual-balances">
          <div className="owed-to-me">
            <div className="icon-container">
              <img src={owedToMe} alt="" className="icon" />
            </div>
            <div className="content">
              <div className="sub-heading">Owed to me</div>
              <div className="amount blue">{formattedPositiveBalance}</div>
            </div>
          </div>
          <div className="i-owe">
            <div className="icon-container">
              <img src={totalIOwe} alt="" className="icon" />
            </div>
            <div className="content">
              <div className="sub-heading">Total I Owe</div>
              <div className="amount red">{formattedNegativeBalance}</div>
            </div>
          </div>
        </div>
        <div className="graph">
          <div className="chart">
            <DoughnutChart
              owe={parseFloat(Math.abs(negativeBalance).toFixed(2))}
              owedToMe={parseFloat(positiveBalance).toFixed(2)}
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

function getStatus(dataObj) {
  let status = "";

  if (dataObj > 0) {
    status = "is owed to me";
  } else if (dataObj < 0) {
    status = "I owe";
  } else {
    status = "";
  }

  return status;
}
