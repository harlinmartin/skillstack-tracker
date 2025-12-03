// src/api.js
// Small fetch wrapper so code reads like a real human wrote it.
const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8001";

async function handleResponse(res) {
  const text = await res.text();
  try { return JSON.parse(text); } catch { return text; }
}

export async function listSkills() {
  const res = await fetch(`${API_BASE}/skills/`);
  return await handleResponse(res);
}

export async function createSkill(payload) {
  const res = await fetch(`${API_BASE}/skills/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return await handleResponse(res);
}

export async function updateSkill(id, payload) {
  const res = await fetch(`${API_BASE}/skills/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return await handleResponse(res);
}

export async function deleteSkill(id) {
  const res = await fetch(`${API_BASE}/skills/${id}`, { method: "DELETE" });
  return res.ok;
}
