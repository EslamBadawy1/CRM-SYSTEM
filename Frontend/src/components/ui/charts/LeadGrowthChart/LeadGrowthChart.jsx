import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

import styles from "./LeadGrowthChart.module.css";

const LeadGrowthChart = () => {

  //  Fake Data (هنغيرها من الباك بعدين)
  const data = [
    { month: "Jan", leads: 15 },
    { month: "Feb", leads: 25 },
    { month: "Mar", leads: 35 },
    { month: "Apr", leads: 50 },
    { month: "May", leads: 70 },
    { month: "Jun", leads: 90 },
  ];

  return (
    <div className={styles.chartCard}>

      {/* Header */}
      <div className={styles.header}>
        <h3>Lead Growth</h3>
        <p>Last 6 Months Performance</p>
      </div>

      {/* Chart */}
      <div className={styles.chartBox}>

        <ResponsiveContainer width="100%" height={300}>

          <BarChart data={data}>

            {/* خطوط خفيفة في الخلفية */}
            <CartesianGrid strokeDasharray="3 3" />

            {/* تحت الشهور */}
            <XAxis dataKey="month" />

            {/* على الشمال الأرقام */}
            <YAxis />

            {/* Hover Tooltip */}
            <Tooltip />

            {/* الـ Bars */}
            <Bar
              dataKey="leads"
              fill="#3b82f6"
              radius={[8, 8, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default LeadGrowthChart;