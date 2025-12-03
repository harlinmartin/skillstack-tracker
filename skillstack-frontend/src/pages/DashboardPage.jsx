import Dashboard from "../components/Dashboard";

export default function DashboardPage({ skills, loading }) {
  return (
    <div>
      <h1>Dashboard</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <Dashboard skills={skills} />
      )}
    </div>
  );
}
