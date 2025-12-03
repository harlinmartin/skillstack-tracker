import React, { useState } from "react";

export default function AddSkillForm({ onCreate }) {
  const [form, setForm] = useState({ name: "", platform: "", resource_type: "", category: "", tags: "" });

  function onChange(e) { setForm({ ...form, [e.target.name]: e.target.value }); }

  async function submit(e) {
    e.preventDefault();
    if (!form.name.trim()) return alert("Please enter a skill name");
    await onCreate(form);
    setForm({ name: "", platform: "", resource_type: "", category: "", tags: "" });
  }

  return (
    <form onSubmit={submit} className="card">
      <h3>Add skill</h3>
      <input name="name" value={form.name} onChange={onChange} placeholder="Skill name (React, Docker)" />
      <input name="platform" value={form.platform} onChange={onChange} placeholder="Platform (Udemy, YouTube)" />
      <input name="resource_type" value={form.resource_type} onChange={onChange} placeholder="Type (course, video, article)" />
      <input name="category" value={form.category} onChange={onChange} placeholder="Category (Web, ML)" />
      <input name="tags" value={form.tags} onChange={onChange} placeholder="tags (comma separated)" />
      <div style={{ textAlign: "right" }}>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}
