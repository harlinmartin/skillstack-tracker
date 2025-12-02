# app/main.py
from fastapi import FastAPI
from .database import init_db
from .routers import skills
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="SkillStack API")

# Init DB tables
@app.on_event("startup")
def on_startup():
    init_db()

# CORS for local dev / frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # in prod set explicit domains
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(skills.router)
