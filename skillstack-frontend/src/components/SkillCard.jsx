import React, { useState } from "react";

export default function SkillCard({ skill, onUpdate, onDelete }) {
  const [hours, setHours] = useState("");
  const [notes, setNotes] = useState(skill.notes || "");

  function patch(p) { onUpdate(skill.id, p); }

  return (
    <div className="card">
      <div className="card-head">
        <strong>{skill.name}</strong>
        <small>{skill.platform} • {skill.resource_type}</small>
      </div>
      <p>Category: {skill.category || "—"}</p>
      <p>Status: {skill.status}</p>
      <p>Hours: {skill.hours_spent}</p>
      <p>Difficulty: {skill.difficulty ?? "—"}</p>
      <p>Tags: {skill.tags || "—"}</p>

      <div className="controls">
        <button onClick={() => patch({ status: skill.status === "completed" ? "in-progress" : "completed" })}>
          Toggle Complete
        </button>
        <button onClick={() => onDelete(skill.id)} className="danger">Delete</button>
      </div>

      <div style={{ marginTop: 8 }}>
        <input placeholder="Add hours" value={hours} onChange={(e)=>setHours(e.target.value)} />
        <button onClick={()=>{ const add = Number(hours||0); patch({ hours_spent: Number(skill.hours_spent) + add }); setHours(""); }}>Add Hours</button>
      </div>

      <div style={{ marginTop: 8 }}>
        <textarea placeholder="Notes" value={notes} onChange={(e)=>setNotes(e.target.value)} />
        <button onClick={()=>{ patch({ notes }); }}>Save Notes</button>
      </div>
    </div>
  );
}
