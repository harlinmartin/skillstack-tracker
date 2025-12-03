import React, { useState } from "react";

export default function SkillCard({ skill, onUpdate, onDelete }) {

  const [hours, setHours] = useState("");
  const [notes, setNotes] = useState(() => skill.notes || "");

  function patch(body) {
    onUpdate(skill.id, body);
  }

  return (
    <div className="skill-card card">

      {/* Header */}
      <div className="card-head">
        <div>
          <h3 className="skill-title">{skill.name}</h3>
          <div className="meta">{skill.platform} • {skill.resource_type}</div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="skill-actions">

          {/* Toggle Completion */}
          <button
            className="btn-complete"
            onClick={() =>
              patch({
                status:
                  skill.status === "completed" ? "in-progress" : "completed",
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

      {/* Card Body Data */}
      <div className="card-body">
        <p><strong>Category:</strong> {skill.category || "—"}</p>
        <p><strong>Status:</strong> {skill.status}</p>
        <p><strong>Hours:</strong> {skill.hours_spent}</p>
        <p><strong>Difficulty:</strong> {skill.difficulty ?? "—"}</p>
        <p><strong>Tags:</strong> {skill.tags || "—"}</p>
      </div>

      {/* Controls: Hours & Notes */}
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
              patch({
                hours_spent: Number(skill.hours_spent) + add,
              });
              setHours("");
            }}
          >
            Add Hours
          </button>
        </div>

        {/* Save Notes */}
        <div className="notes-block">
          <textarea
            placeholder="Notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          <button
            className="btn-small"
            onClick={() => {
              patch({ notes });
            }}
          >
            Save Notes
          </button>
        </div>
      </div>
    </div>
  );
}
