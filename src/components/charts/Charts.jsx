import "./Charts.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Charts = () => {
  const data = [
    {
      name: "Jan",
      "Active User": 3440,
    },
    {
      name: "Feb",
      "Active User": 3000,
    },
    {
      name: "March",
      "Active User": 2000,
    },
    {
      name: "Apr",
      "Active User": 2780,
    },
    {
      name: "May",
      "Active User": 1890,
    },
    {
      name: "June",
      "Active User": 2390,
    },
    {
      name: "July",
      "Active User": 3001,
    },
    {
      name: "Aug",
      "Active User": 3490,
    },
    {
      name: "Sep",
      "Active User": 2230,
    },
    {
      name: "Oct",
      "Active User": 1643,
    },
    {
      name: "Nov",
      "Active User": 2361,
    },
    {
      name: "Dec",
      "Active User": 3262,
    },
  ];
  return (
    <div className="chart">
      <h3 className="chart-title">User Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey="Active User" stroke="#5550bd" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
