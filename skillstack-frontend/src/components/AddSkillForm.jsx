// src/components/AddSkillForm.jsx
import React, { useState } from "react";

export default function AddSkillForm({ onCreate }) {
  const [form, setForm] = useState({
    name: "",
    platform: "",
    resource_type: "",
    category: "",
    tags: "",
  });

  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function submit(e) {
    e.preventDefault();
    if (!form.name.trim()) return alert("Please enter a name");
    await onCreate(form);
    setForm({ name: "", platform: "", resource_type: "", category: "", tags: "" });
  }

  return (
    <form onSubmit={submit} className="card add-skill-form">
      <h3>Add skill</h3>
      <div className="form-row">
        <input name="name" value={form.name} onChange={onChange} placeholder="Skill name (React, Docker)" />
        <input name="platform" value={form.platform} onChange={onChange} placeholder="Platform (YouTube, Udemy)" />
      </div>

      <div className="form-row">
        <input name="resource_type" value={form.resource_type} onChange={onChange} placeholder="Type (video, course)" />
        <input name="category" value={form.category} onChange={onChange} placeholder="Category (Web, ML)" />
      </div>

      <div className="form-row">
        <input name="tags" value={form.tags} onChange={onChange} placeholder="Tags (comma separated)" />
        <div style={{flex: '0 0 auto'}}><button type="submit" className="btn-primary">Add</button></div>
      </div>
    </form>
  );
}
