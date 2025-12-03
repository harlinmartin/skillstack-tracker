// src/components/SkillCard.jsx
import React, { useState } from "react";

export default function SkillCard({ skill, onUpdate, onDelete }) {
  const [hours, setHours] = useState("");
  const [notes, setNotes] = useState(skill.notes || "");

  function patch(body) {
    onUpdate(skill.id, body);
  }

  return (
    <div className="skill-card card">
      <div className="card-head">
        <div>
          <h3 className="skill-title">{skill.name}</h3>
          <div className="meta">{skill.platform} • {skill.resource_type}</div>
        </div>
        <div className="skill-actions">
          <button className="btn" onClick={() => patch({ status: skill.status === "completed" ? "in-progress" : "completed" })}>
            Toggle Complete
          </button>
          <button className="btn danger" onClick={() => onDelete(skill.id)}>Delete</button>
        </div>
      </div>

      <div className="card-body">
        <p><strong>Category:</strong> {skill.category || "—"}</p>
        <p><strong>Status:</strong> {skill.status}</p>
        <p><strong>Hours:</strong> {skill.hours_spent}</p>
        <p><strong>Difficulty:</strong> {skill.difficulty ?? "—"}</p>
        <p><strong>Tags:</strong> {skill.tags || "—"}</p>
      </div>

      <div className="card-controls">
        <div className="inline-input">
          <input placeholder="Add hours" value={hours} onChange={(e)=>setHours(e.target.value)} />
          <button className="btn" onClick={()=>{ const add = Number(hours||0); patch({ hours_spent: Number(skill.hours_spent) + add }); setHours(""); }}>Add Hours</button>
        </div>

        <div className="notes-block">
          <textarea placeholder="Notes" value={notes} onChange={(e)=>setNotes(e.target.value)} />
          <button className="btn" onClick={()=>{ patch({ notes }); }}>Save Notes</button>
        </div>
      </div>
    </div>
  );
}
