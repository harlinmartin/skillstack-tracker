# app/routers/skills.py
from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session
from typing import List
from ..database import get_session
from .. import crud, schemas

router = APIRouter(prefix="/skills", tags=["skills"])

@router.post("/", response_model=schemas.SkillRead)
def create_skill(payload: schemas.SkillCreate, session: Session = Depends(get_session)):
    return crud.create_skill(session, payload)

@router.get("/", response_model=List[schemas.SkillRead])
def list_skills(session: Session = Depends(get_session)):
    return crud.list_skills(session)

@router.get("/{skill_id}", response_model=schemas.SkillRead)
def get_skill(skill_id: int, session: Session = Depends(get_session)):
    skill = crud.get_skill(session, skill_id)
    if not skill:
        raise HTTPException(status_code=404, detail="Skill not found")
    return skill

@router.patch("/{skill_id}", response_model=schemas.SkillRead)
def update_skill(skill_id: int, payload: schemas.SkillUpdate, session: Session = Depends(get_session)):
    updated = crud.update_skill(session, skill_id, payload)
    if not updated:
        raise HTTPException(status_code=404, detail="Skill not found")
    return updated

@router.delete("/{skill_id}")
def delete_skill(skill_id: int, session: Session = Depends(get_session)):
    ok = crud.delete_skill(session, skill_id)
    if not ok:
        raise HTTPException(status_code=404, detail="Skill not found")
    return {"ok": True}
