// src/components/AddSkillForm.jsx
import React, { useState } from "react";

export default function AddSkillForm({ onCreate }) {
  const [form, setForm] = useState({
    name: "",
    platform: "",
    resource_type: "",
    category: "",
    tags: "",
    difficulty: "",     // ⭐ NEW FIELD
  });

  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function submit(e) {
    e.preventDefault();
    if (!form.name.trim()) return alert("Please enter a name");

    await onCreate({
      ...form,
      difficulty: form.difficulty ? Number(form.difficulty) : null  // ⭐ convert to number
    });

    // Reset form
    setForm({
      name: "",
      platform: "",
      resource_type: "",
      category: "",
      tags: "",
      difficulty: "",
    });
  }

  return (
    <form onSubmit={submit} className="card add-skill-form">
      <h3>Add skill</h3>

      {/* Row 1 */}
      <div className="form-row">
        <input
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder="Skill name (React, Docker)"
        />
        <input
          name="platform"
          value={form.platform}
          onChange={onChange}
          placeholder="Platform (YouTube, Udemy)"
        />
      </div>

      {/* Row 2 */}
      <div className="form-row">
        <input
          name="resource_type"
          value={form.resource_type}
          onChange={onChange}
          placeholder="Type (video, course)"
        />
        <input
          name="category"
          value={form.category}
          onChange={onChange}
          placeholder="Category (Web, ML)"
        />
      </div>

      {/* Row 3 */}
      <div className="form-row">
        <input
          name="tags"
          value={form.tags}
          onChange={onChange}
          placeholder="Tags (comma separated)"
        />

        {/* ⭐ Difficulty Dropdown */}
        <select
          name="difficulty"
          value={form.difficulty}
          onChange={onChange}
          className="difficulty-select"
          style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
        >
          <option value="">Difficulty</option>
          <option value="1">⭐ Beginner</option>
          <option value="2">⭐⭐ Easy</option>
          <option value="3">⭐⭐⭐ Medium</option>
          <option value="4">⭐⭐⭐⭐ Hard</option>
          <option value="5">⭐⭐⭐⭐⭐ Expert</option>
        </select>

        <div style={{ flex: "0 0 auto" }}>
          <button type="submit" className="btn-primary">Add</button>
        </div>
      </div>
    </form>
  );
}
