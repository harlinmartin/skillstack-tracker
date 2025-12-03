// src/App.jsx
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { listSkills, createSkill, updateSkill, deleteSkill } from "./api";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import DashboardPage from "./pages/DashboardPage";
import AddSkillPage from "./pages/AddSkillPage";

import "./styles/global.css";
import "./styles/layout.css";
import "./styles/navbar.css";
import "./styles/forms.css";
import "./styles/cards.css";
import "./styles/dashboard.css";

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

  useEffect(() => {
    load();
  }, []);

  async function handleCreate(payload) {
    const created = await createSkill(payload);
    setSkills((prev) => [created, ...prev]);
  }

  async function handleUpdate(id, patch) {
    const updated = await updateSkill(id, patch);
    setSkills((prev) => prev.map((s) => (s.id === updated.id ? updated : s)));
  }

  async function handleDelete(id) {
    const ok = await deleteSkill(id);
    if (ok) setSkills((prev) => prev.filter((s) => s.id !== id));
  }

  return (
    <Router>
      <Navbar />

      <div className="container">
        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/dashboard"
            element={<DashboardPage skills={skills} />}
          />

          <Route
            path="/add-skill"
            element={
              <AddSkillPage
                skills={skills}
                loading={loading}
                onCreate={handleCreate}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
            }
          />

        </Routes>
      </div>
    </Router>
  );
}
