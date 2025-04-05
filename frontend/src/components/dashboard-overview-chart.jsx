import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = ["#FE6789", "#4495C7"]; // Red for 'Owe', Blue for 'Owed to me'

export function DoughnutChart({ owe, owedToMe }) {
  const data = [
    { name: "Owe", value: parseFloat(owe) || 0 },
    { name: "Owed to me", value: parseFloat(owedToMe) || 0 },
  ];

  return (
    <div style={{ width: "100%", maxWidth: "200px", height: "150px" }}>
      <PieChart
        width={200}
        height={150}
        viewBox="0 0 200 150" // Removes unwanted padding
        preserveAspectRatio="xMidYMid meet" // Ensures proper responsiveness
      >
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={30}
          outerRadius={60}
          paddingAngle={0}
          dataKey="value"
          stroke="none"
          startAngle={180}
          endAngle={0}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default DoughnutChart;
