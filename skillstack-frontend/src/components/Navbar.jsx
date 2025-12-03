// src/components/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="brand">
          <div className="logo">📚</div>
          <div className="title">SkillStack</div>
        </div>

        <nav className="nav-actions">
          <button className="nav-btn">Dashboard</button>
          <button className="nav-btn">My Skills</button>
          <button className="nav-btn">Export</button>
        </nav>
      </div>
    </header>
  );
}
