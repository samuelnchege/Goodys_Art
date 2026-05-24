document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (!targetSection) return;
    const marginTop = window.innerHeight * 0.1;
    window.scrollTo({ top: targetSection.offsetTop - marginTop, behavior: 'smooth' });
  });
});

function initHeroSlider() {
  const slides = document.querySelectorAll('#hero-slider .hero-slide');
  if (!slides.length) return;

  let currentIndex = 0;
  setInterval(() => {
    slides[currentIndex].classList.remove('opacity-100');
    slides[currentIndex].classList.add('opacity-0');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.remove('opacity-0');
    slides[currentIndex].classList.add('opacity-100');
  }, 4000);
}

function updateFooterYear() {
  const yearEl = document.getElementById('footerYear');
  if (!yearEl) return;
  yearEl.textContent = new Date().getFullYear();
}

initHeroSlider();
updateFooterYear();
