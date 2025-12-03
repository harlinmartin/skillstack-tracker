import AddSkillForm from "../components/AddSkillForm";
import SkillList from "../components/SkillList";

export default function AddSkillPage() {
  return (
    <div>
      <h1>Add Skill</h1>
      <AddSkillForm />

      <h2 style={{ marginTop: "20px" }}>Your Skills</h2>
      <SkillList />
    </div>
  );
}
