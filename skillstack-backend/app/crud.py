# app/crud.py
from sqlmodel import select, Session
from .models import Skill
from .schemas import SkillCreate, SkillUpdate
from typing import List, Optional
from datetime import datetime

def create_skill(session: Session, skill_in: SkillCreate) -> Skill:
    skill = Skill.from_orm(skill_in)
    session.add(skill)
    session.commit()
    session.refresh(skill)
    return skill

def get_skill(session: Session, skill_id: int) -> Optional[Skill]:
    return session.get(Skill, skill_id)

def list_skills(session: Session, limit: int = 100) -> List[Skill]:
    statement = select(Skill).order_by(Skill.created_at.desc()).limit(limit)
    return session.exec(statement).all()

def update_skill(session: Session, skill_id: int, skill_in: SkillUpdate) -> Optional[Skill]:
    skill = session.get(Skill, skill_id)
    if not skill:
        return None
    # update fields if provided
    for field, value in skill_in.dict(exclude_unset=True).items():
        setattr(skill, field, value)
    skill.updated_at = datetime.utcnow()
    session.add(skill)
    session.commit()
    session.refresh(skill)
    return skill

def delete_skill(session: Session, skill_id: int) -> bool:
    skill = session.get(Skill, skill_id)
    if not skill:
        return False
    session.delete(skill)
    session.commit()
    return True

# Simple analytics helper
def stats_by_category(session: Session):
    statement = "SELECT category, COUNT(*) as cnt, SUM(hours_spent) as hours FROM skill GROUP BY category"
    # raw SQL for simplicity:
    result = session.exec(statement).all()
    return result
