import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { product: "All Products", sales: 34 },
  { product: "Toffees", sales: 34 },
  { product: "Chews", sales: 22 },
  { product: "Bubble Gums", sales: 17 },
  { product: "Lollipops", sales: 12 },
  { product: "Candies", sales: 9 },
  { product: "Chocolates", sales: 8 },
];

const ProductsRankingChart = () => {
  return (
    <div className="chart-card animate-chart">
      <h5 className="chart-title admin-title">Top Products Ranking</h5>

      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
          <XAxis dataKey="product" />
          <YAxis />
          <Tooltip />

          <Bar
            barSize={70}
            dataKey="sales"
            fill="#4acdf8"
            animationDuration={1300}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductsRankingChart;
