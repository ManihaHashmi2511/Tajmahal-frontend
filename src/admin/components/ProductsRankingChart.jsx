import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const ProductsRankingChart = ({ data }) => {

  if (!Array.isArray(data) || data.length === 0) {
    return (
      <div className="chart-card animate-chart">
        <h5 className="chart-title admin-title">Top Products Ranking</h5>
        <p className="text-center mt-5">No product Found</p>
      </div>
    );
  }


  return (
    <div className="chart-card animate-chart">
      <h5 className="chart-title admin-title">Top Products Ranking</h5>

      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar barSize={50} dataKey="count" fill="#4acdf8" animationDuration={1300} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductsRankingChart;