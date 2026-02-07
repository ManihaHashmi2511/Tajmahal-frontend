import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Tajmahal", value: 34 },
  { name: "Sweet Times", value: 39 },
  { name: "Besa", value: 54 },
  { name: "Hlu's", value: 12 }
];

const COLORS = ["#E3322C", "#fc5257", "#facc15", "#78160C"];

const BrandDistributionPie = () => {
  return (
    <div className="chart-card animate-chart">
      <h5 className="chart-title admin-title">Brand Distribution</h5>

      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={100}
            paddingAngle={4}
            dataKey="value"
            animationDuration={1200}
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index]} />
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
              style={{ background: COLORS[i] }}
            ></span>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandDistributionPie;
