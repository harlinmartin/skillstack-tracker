# app/schemas.py
from typing import Optional
from pydantic import BaseModel
from datetime import datetime

class SkillCreate(BaseModel):
    name: str
    platform: Optional[str] = None
    resource_type: Optional[str] = None
    category: Optional[str] = None
    tags: Optional[str] = None
    difficulty: Optional[int] = None 

class SkillUpdate(BaseModel):
    status: Optional[str] = None
    difficulty: Optional[int] = None
    hours_spent: Optional[float] = None
    notes: Optional[str] = None
    tags: Optional[str] = None

class SkillRead(BaseModel):
    id: int
    name: str
    platform: Optional[str]
    resource_type: Optional[str]
    category: Optional[str]
    status: str
    difficulty: Optional[int]
    hours_spent: float
    notes: Optional[str]
    tags: Optional[str]
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True
