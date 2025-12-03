import React, { useMemo } from "react";

export default function Dashboard({ skills = [] }) {
  const stats = useMemo(() => {
    const byStatus = skills.reduce((acc,s)=>{ acc[s.status] = (acc[s.status]||0)+1; return acc; }, {});
    const totalHours = skills.reduce((a,s)=>a + (Number(s.hours_spent)||0), 0);
    const byCategory = skills.reduce((acc,s)=>{ const c = s.category || "Uncategorized"; acc[c] = (acc[c]||0)+1; return acc; }, {});
    return { byStatus, totalHours, byCategory };
  }, [skills]);

  return (
    <div className="card">
      <h3>Dashboard</h3>
      <p>Total Skills: {skills.length}</p>
      <p>Total Hours: {stats.totalHours}</p>
      <h4>By status</h4>
      {Object.entries(stats.byStatus).map(([k,v])=> <div key={k}>{k}: {v}</div>)}
      <h4>By category</h4>
      {Object.entries(stats.byCategory).map(([k,v])=> <div key={k}>{k}: {v}</div>)}
    </div>
  );
}
