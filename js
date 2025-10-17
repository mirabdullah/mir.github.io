// Dark mode toggle with saved preference
const themeToggle = () => {
  const root = document.documentElement;
  const isDark = root.classList.toggle('dark');
  try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch (e) {}
};

document.addEventListener('DOMContentLoaded', () => {
  // Apply saved theme
  try {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}

  // Year stamp
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Hook toggle
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.addEventListener('click', themeToggle);

  // Reveal-on-scroll
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
});
