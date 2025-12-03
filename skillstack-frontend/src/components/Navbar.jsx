import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-inner">

        <Link to="/" className="brand">
          <span className="logo">📚</span>
          <span className="title">SkillStack</span>
        </Link>

        <div className="nav-actions">
          <Link to="/" className="nav-btn">Home</Link>
          <Link to="/dashboard" className="nav-btn">Dashboard</Link>
          <Link to="/add-skill" className="nav-btn">Add Skill</Link>
        </div>

      </div>
    </div>
  );
}
