import React, { useMemo } from "react";
import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid,
  ResponsiveContainer
} from "recharts";

const COLORS = ["#4caf50", "#1e88e5", "#ff9800", "#e53935", "#8e44ad"];

export default function Dashboard({ skills = [] }) {
  const stats = useMemo(() => {
    const byStatus = skills.reduce((acc, s) => {
      acc[s.status] = (acc[s.status] || 0) + 1;
      return acc;
    }, {});

    const totalHours = skills.reduce(
      (a, s) => a + (Number(s.hours_spent) || 0),
      0
    );

    const byCategory = skills.reduce((acc, s) => {
      const c = s.category || "Uncategorized";
      acc[c] = (acc[c] || 0) + 1;
      return acc;
    }, {});

    return { byStatus, totalHours, byCategory };
  }, [skills]);

  const pieData = Object.entries(stats.byStatus).map(([key, value]) => ({
    name: key,
    value: value
  }));

  const barData = Object.entries(stats.byCategory).map(([key, value]) => ({
    category: key,
    count: value
  }));

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>

      {/* Top cards */}
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Total Skills</h3>
          <p className="dashboard-number">{skills.length}</p>
        </div>

        <div className="dashboard-card">
          <h3>Total Hours</h3>
          <p className="dashboard-number">{stats.totalHours}</p>
        </div>
      </div>

      {/* Pie chart for status */}
      <h3>Status Breakdown</h3>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={280}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Bar chart for categories */}
      <h3>Category Breakdown</h3>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#1e88e5" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
