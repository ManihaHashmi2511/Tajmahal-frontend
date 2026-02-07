import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

const data = [
  { month: "Jan", visitors: 120 },
  { month: "Feb", visitors: 180 },
  { month: "Mar", visitors: 260 },
  { month: "Apr", visitors: 300 },
  { month: "May", visitors: 420 },
  { month: "Jun", visitors: 520 },
  { month: "Jul", visitors: 680 }
];

const ProductVisitorsChart = () => {
  return (
    <div className="chart-card animate-chart">
      <h5 className="chart-title admin-title">Product Visitors Overview</h5>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="visitors"
            stroke="#8DE3FD"
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
            animationDuration={1500}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductVisitorsChart;
