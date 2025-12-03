import React, { useEffect, useState } from "react";
import { listSkills, createSkill, updateSkill, deleteSkill } from "./api";
import AddSkillForm from "./components/AddSkillForm";
import SkillList from "./components/SkillList";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    try {
      const data = await listSkills();
      setSkills(Array.isArray(data) ? data : []);
    } catch (e) {
      console.error("Failed to load skills", e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  async function handleCreate(payload) {
    const created = await createSkill(payload);
    setSkills(prev => [created, ...prev]);
  }

  async function handleUpdate(id, patch) {
    const updated = await updateSkill(id, patch);
    setSkills(prev => prev.map(s => (s.id === updated.id ? updated : s)));
  }

  async function handleDelete(id) {
    const ok = await deleteSkill(id);
    if (ok) setSkills(prev => prev.filter(s => s.id !== id));
  }

  return (
    <div className="container">
      <h1>SkillStack</h1>
      <div className="layout">
        <main>
          <AddSkillForm onCreate={handleCreate} />
          {loading ? <p>Loading…</p> : <SkillList skills={skills} onUpdate={handleUpdate} onDelete={handleDelete} />}
        </main>
        <aside>
          <Dashboard skills={skills} />
        </aside>
      </div>
    </div>
  );
}
