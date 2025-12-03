import React, { useMemo } from "react";

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

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>

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

      <h3>Status Breakdown</h3>
      <div className="dashboard-grid">
        {Object.entries(stats.byStatus).map(([k, v]) => (
          <div className="dashboard-card" key={k}>
            <h4>{k}</h4>
            <p className="dashboard-number">{v}</p>
          </div>
        ))}
      </div>

      <h3>Category Breakdown</h3>
      <div className="dashboard-grid">
        {Object.entries(stats.byCategory).map(([k, v]) => (
          <div className="dashboard-card" key={k}>
            <h4>{k}</h4>
            <p className="dashboard-number">{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
