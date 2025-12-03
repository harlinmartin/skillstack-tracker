// src/components/SkillCard.jsx
import React, { useState } from "react";

export default function SkillCard({ skill, onUpdate, onDelete }) {
  const [hours, setHours] = useState("");
  const [notes, setNotes] = useState(skill.notes || "");

  // Patch helper → waits for backend + returns updated skill
  async function patch(body) {
    const updated = await onUpdate(skill.id, body);

    // If notes changed in backend, update local state
    if (updated && updated.notes !== undefined) {
      setNotes(updated.notes || "");
    }

    return updated;
  }

  return (
    <div className="skill-card card">

      {/* Header */}
      <div className="card-head">
        <div>
          <h3 className="skill-title">{skill.name}</h3>
          <div className="meta">{skill.platform} • {skill.resource_type}</div>
        </div>

        {/* Action Buttons */}
        <div className="skill-actions">

          {/* Toggle completion */}
          <button
            className="btn-complete"
            onClick={() =>
              patch({
                status: skill.status === "completed" ? "in-progress" : "completed"
              })
            }
          >
            Toggle Complete
          </button>

          {/* Delete */}
          <button className="btn-delete" onClick={() => onDelete(skill.id)}>
            Delete
          </button>

        </div>
      </div>

      {/* Skill Details */}
      <div className="card-body">
        <p><strong>Category:</strong> {skill.category || "—"}</p>
        <p><strong>Status:</strong> {skill.status}</p>
        <p><strong>Hours:</strong> {skill.hours_spent}</p>
        <p><strong>Difficulty:</strong> {skill.difficulty ?? "—"}</p>
        <p><strong>Tags:</strong> {skill.tags || "—"}</p>
      </div>

      {/* Controls */}
      <div className="card-controls">

        {/* Add Hours */}
        <div className="inline-input">
          <input
            placeholder="Add hours"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
          />
          <button
            className="btn-small"
            onClick={() => {
              const add = Number(hours || 0);
              patch({ hours_spent: Number(skill.hours_spent) + add });
              setHours("");
            }}
          >
            Add Hours
          </button>
        </div>

        {/* Notes */}
        <div className="notes-block">
          <textarea
            placeholder="Notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>

          <button
            className="btn-small"
            onClick={() => patch({ notes })}
          >
            Save Notes
          </button>

          {/* Show saved notes */}
          {skill.notes && (
            <p style={{ marginTop: "8px", whiteSpace: "pre-wrap" }}>
              <strong>Saved:</strong> {skill.notes}
            </p>
          )}
        </div>

      </div>

    </div>
  );
}
