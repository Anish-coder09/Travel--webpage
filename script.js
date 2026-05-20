// Mobile menu
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
if (toggle) toggle.addEventListener('click', () => links.classList.toggle('open'));

// Active nav link
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  if (a.getAttribute('href') === path) a.classList.add('active');
});

// Forms
document.querySelectorAll('form[data-handle]').forEach(f => {
  f.addEventListener('submit', e => {
    e.preventDefault();
    const msg = f.querySelector('.form-msg');
    if (msg) { msg.textContent = '✓ Thanks! We\'ll be in touch shortly.'; msg.style.color = '#16a34a'; }
    f.reset();
  });
});

// Reveal on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.style.opacity = 1; e.target.style.transform = 'translateY(0)'; }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.card, .feature, .section-head').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  io.observe(el);
});

// Year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
