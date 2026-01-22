// Footer dates
const yearEl = document.getElementById("year");
const lastUpdatedEl = document.getElementById("lastUpdated");

if (yearEl) yearEl.textContent = new Date().getFullYear();
if (lastUpdatedEl) lastUpdatedEl.textContent = new Date().toLocaleDateString(undefined, { year:"numeric", month:"short", day:"numeric" });

