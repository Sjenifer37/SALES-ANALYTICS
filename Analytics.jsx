import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import './style.css'; // Make sure your CSS file exists

const Analytics = () => {
  const data = [
    { Employee_Name: "Sneha",  Total_Sales: 4500, Num_of_Customer: 260, Profit: 2300 },
    { Employee_Name: "Jeni",   Total_Sales: 4000, Num_of_Customer: 225, Profit: 2100 },
    { Employee_Name: "Raj",    Total_Sales: 5200, Num_of_Customer: 330, Profit: 2800 },
    { Employee_Name: "Gayu",   Total_Sales: 3600, Num_of_Customer: 210, Profit: 1900 },
    { Employee_Name: "Mary",   Total_Sales: 4800, Num_of_Customer: 285, Profit: 2600 },
    { Employee_Name: "Karthi", Total_Sales: 5800, Num_of_Customer: 350, Profit: 3100 },
    { Employee_Name: "Rajesh", Total_Sales: 4200, Num_of_Customer: 240, Profit: 2200 },
    { Employee_Name: "Ayyapa", Total_Sales: 3400, Num_of_Customer: 190, Profit: 1700 },
    { Employee_Name: "Vikram", Total_Sales: 6600, Num_of_Customer: 400, Profit: 3500 },
    { Employee_Name: "Vinaya", Total_Sales: 3700, Num_of_Customer: 210, Profit: 2000 },
    { Employee_Name: "Kar",    Total_Sales: 3200, Num_of_Customer: 180, Profit: 1500 },
    { Employee_Name: "Kali",   Total_Sales: 5200, Num_of_Customer: 320, Profit: 2800 },
  ];

  const COLORS = ["#00C49F", "#FFBB28", "#FF8042", "#0088FE", "#AA00FF", "#FF4444"];

  return (
    <main className="analytics-container" style={{ backgroundColor: "#181819f5", color: "#fff", minHeight: "80vh", padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Customer Sales Analytics</h2>

      {/* Bar Chart */}
      <div className="chart-wrapper" style={{ width: "100%", height: 300, marginBottom: "40px" }}>
        <ResponsiveContainer>
          <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="Employee_Name" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip contentStyle={{ backgroundColor: "#333", borderRadius: "10px", color: "#fff" }} />
            <Legend wrapperStyle={{ color: "#fff" }} />
            <Bar dataKey="Total_Sales" fill="#AA00FF" />
            <Bar dataKey="Num_of_Customer" fill="#12B7E1" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Line Chart */}
      <div className="chart-wrapper" style={{ width: "100%", height: 300, marginBottom: "40px" }}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="Employee_Name" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip contentStyle={{ backgroundColor: "#333", borderRadius: "10px", color: "#fff" }} />
            <Legend wrapperStyle={{ color: "#fff" }} />
            <Line type="monotone" dataKey="Total_Sales" stroke="#EA8F08" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="Profit" stroke="#EE06DA" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="pie-chart-wrapper" style={{ width: "100%", height: 300, marginBottom: "40px" }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data.slice(0, 6)}
              dataKey="Profit"
              nameKey="Employee_Name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              label
            >
              {data.slice(0, 6).map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ backgroundColor: "#333", borderRadius: "10px", color: "#fff" }} />
            <Legend wrapperStyle={{ color: "#fff" }} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Area Chart */}
      <div className="chart-wrapper" style={{ width: "100%", height: 300, marginBottom: "40px" }}>
        <ResponsiveContainer>
          <AreaChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#AA00FF" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#AA00FF" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#EE06DA" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#EE06DA" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="Employee_Name" stroke="#fff" />
            <YAxis stroke="#fff" />
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <Tooltip contentStyle={{ backgroundColor: "#333", borderRadius: "10px", color: "#fff" }} />
            <Legend wrapperStyle={{ color: "#fff" }} />
            <Area type="monotone" dataKey="Total_Sales" stroke="#AA00FF" fillOpacity={1} fill="url(#colorSales)" />
            <Area type="monotone" dataKey="Profit" stroke="#EE06DA" fillOpacity={1} fill="url(#colorProfit)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
};

export default Analytics;
