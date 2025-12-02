# app/models.py
from typing import Optional
from sqlmodel import SQLModel, Field
from datetime import datetime

class Skill(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    platform: Optional[str] = None  # Udemy, YouTube, Coursera, etc.
    resource_type: Optional[str] = None  # video, course, article
    category: Optional[str] = None  # e.g., Web Dev, Data Science
    status: str = "not started"  # not started, in-progress, completed
    difficulty: Optional[int] = None  # 1-5
    hours_spent: float = 0.0
    notes: Optional[str] = None
    tags: Optional[str] = None  # comma-separated tags
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
