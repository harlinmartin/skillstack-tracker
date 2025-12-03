export default function HomePage() {
  return (
    <div>
      <h1>Welcome to SkillStack</h1>
      <p>
        Track your learning goals, monitor your progress, and build new skills easily.
      </p>

      <div className="card" style={{ marginTop: "20px" }}>
        <h3>What you can do:</h3>
        <ul>
          <li>Add new skills you want to learn</li>
          <li>Track hours spent on each skill</li>
          <li>Save notes for each skill</li>
          <li>Monitor progress on the Dashboard</li>
        </ul>
      </div>
    </div>
  );
}
