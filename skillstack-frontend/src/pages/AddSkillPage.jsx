import AddSkillForm from "../components/AddSkillForm";
import SkillList from "../components/SkillList";

export default function AddSkillPage({ skills, loading, onCreate, onUpdate, onDelete }) {
  return (
    <div>
      <h1>Add Skill</h1>


      <AddSkillForm onCreate={onCreate} />

      <h2 style={{ marginTop: "20px" }}>Your Skills</h2>


      {loading ? (
        <p>Loading...</p>
      ) : (
        <SkillList
          skills={skills}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      )}
    </div>
  );
}
