const CONFIG = {
  githubUsername: "naveendammalapati19",
  githubUrl: "https://github.com/naveendammalapati19",
  projectRepos: [
    "",
    "",
    ""
  ]
};

document.querySelectorAll(".js-github").forEach(link => {
  if (CONFIG.githubUrl && CONFIG.githubUrl !== "#") {
    link.href = CONFIG.githubUrl;
  } else {
    link.addEventListener("click", event => event.preventDefault());
    link.title = "Add your exact GitHub profile URL in script.js";
  }
});

document.querySelectorAll(".js-project").forEach((link, index) => {
  const repo = CONFIG.projectRepos[index];
  if (repo) {
    link.href = repo;
    link.textContent = "View Repository ↗";
  } else {
    link.addEventListener("click", event => event.preventDefault());
  }
});

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("menu-open", open);
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  });
});

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".nav-link")];

function updateActiveNav() {
  const y = window.scrollY + 160;
  let current = "home";
  for (const section of sections) {
    if (section.offsetTop <= y) current = section.id;
  }
  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
}
window.addEventListener("scroll", updateActiveNav, { passive: true });
updateActiveNav();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const glow = document.getElementById("cursorGlow");
window.addEventListener("pointermove", e => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

document.querySelectorAll("[data-tilt]").forEach(card => {
  card.addEventListener("pointermove", e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(800px) rotateX(${-y * 5}deg) rotateY(${x * 7}deg) translateY(-3px)`;
  });
  card.addEventListener("pointerleave", () => {
    card.style.transform = "";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let w = 0, h = 0, points = [];

function resizeCanvas() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  w = window.innerWidth;
  h = window.innerHeight;
  canvas.width = w * ratio;
  canvas.height = h * ratio;
  canvas.style.width = `${w}px`;
  canvas.style.height = `${h}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

  const count = Math.min(70, Math.floor(w / 18));
  points = Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.16,
    vy: (Math.random() - 0.5) * 0.16,
    r: Math.random() * 1.3 + 0.3
  }));
}

function animateParticles() {
  ctx.clearRect(0, 0, w, h);
  for (const p of points) {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > w) p.vx *= -1;
    if (p.y < 0 || p.y > h) p.vy *= -1;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(113, 175, 255, .35)";
    ctx.fill();
  }

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const a = points[i], b = points[j];
      const dx = a.x - b.x, dy = a.y - b.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 115) {
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(80, 140, 255, ${0.07 * (1 - dist / 115)})`;
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(animateParticles);
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
animateParticles();
