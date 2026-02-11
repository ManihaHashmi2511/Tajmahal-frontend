import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const COLORS = ["#facc15", "#fc5257", "#E3322C", "#78160C"];

const BrandDistributionPie = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="chart-card animate-chart">
        <h5 className="chart-title admin-title">Brand Distribution</h5>
        <p className="text-center mt-5">No product Found</p>
      </div>
    );
  }

  return (
    <div className="chart-card animate-chart">
      <h5 className="chart-title admin-title">Brand Distribution</h5>

      <ResponsiveContainer width="100%" height={250} style={{ position: 'relative', top: '-15px'}}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={100}
            paddingAngle={4}
            dataKey="value"
            nameKey="brand"
            animationDuration={1200}
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      <div className="pie-legend">
        {data.map((item, i) => (
          <div key={i} className="legend-item">
            <span
              className="legend-color"
              style={{ background: COLORS[i % COLORS.length] }}
            ></span>
            {item.brand}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandDistributionPie;
