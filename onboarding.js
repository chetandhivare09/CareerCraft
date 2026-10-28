function showToast(msg) {
  const toast = document.createElement("div");
  toast.className = "onboard-toast";
  toast.innerText = msg;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("hide");
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}


// ===== SESSION STORAGE KEYS =====
const SESSION_KEY = "careercraft_session";

function continueSession() {
  const session = localStorage.getItem(SESSION_KEY);

  if (!session) {
    showToast("No saved session found. Start a new one.");
    return;
  }

  window.location.href = "index.html?resume=1";
}

function newSession() {
  localStorage.removeItem(SESSION_KEY);
  window.location.href = "index.html";
}


// ===== ATTACH BUTTON EVENTS =====
[
  "continueBtn",
  "continueBtn2",
  "continueBtn3"
].forEach(id => {
  document.getElementById(id)?.addEventListener("click", continueSession);
});

[
  "newSessionBtn",
  "newSessionBtn2",
  "newSessionBtn3"
].forEach(id => {
  document.getElementById(id)?.addEventListener("click", newSession);
});


// Mobile Menu Toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('active');
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.remove('active');
  });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'hsla(230, 25%, 6%, 0.95)';
  } else {
    navbar.style.background = 'hsla(230, 25%, 6%, 0.8)';
  }
});

// Intersection Observer for scroll animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.feature-card, .step-card, .showcase-content, .showcase-image').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Button hover effects
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.02)';
  });
  btn.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
});

console.log('CareerCraft Landing Page Loaded Successfully! 🚀');

document.querySelectorAll('.hover-gif-logo').forEach(img => {
  const staticSrc = img.dataset.static;
  const gifSrc = img.dataset.gif;

  img.addEventListener('mouseenter', () => {
    img.src = gifSrc;
  });

  img.addEventListener('mouseleave', () => {
    img.src = staticSrc;
  });
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");

  const loader = document.getElementById("app-loader");
  if (loader) {
    loader.classList.add("hide");
    setTimeout(() => loader.remove(), 500);
  }
});


// ================= THEME TOGGLE SYSTEM =================

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  if (!body.classList.contains("dark-mode")) {
    body.classList.add("dark-mode");
  }

  const savedTheme = localStorage.getItem("cc_theme");

  if (savedTheme === "light") {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    if (toggleBtn) {
      toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
  }

  toggleBtn?.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
      toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
      localStorage.setItem("cc_theme", "light");
    } else {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
      toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
      localStorage.setItem("cc_theme", "dark");
    }
  });
});