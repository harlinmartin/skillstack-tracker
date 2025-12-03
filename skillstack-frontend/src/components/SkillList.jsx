import React from "react";
import SkillCard from "./SkillCard";

export default function SkillList({ skills, onUpdate, onDelete }) {
  if (!skills || !skills.length) return <p>No skills yet. Add one!</p>;
  return (
    <div>
      {skills.map(skill => (
        <SkillCard 
  key={skill.id + "-" + (skill.notes || "")} 
  skill={skill} 
  onUpdate={onUpdate} 
  onDelete={onDelete} 
/>

      ))}
    </div>
  );
}
