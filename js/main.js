const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const header = document.querySelector('[data-header]');

const syncHeader = () => header.classList.toggle('scrolled', window.scrollY > 40);
syncHeader();
window.addEventListener('scroll', syncHeader, { passive: true });

const revealItems = document.querySelectorAll('.reveal');

if (reducedMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
}

if (!reducedMotion && window.matchMedia('(pointer: fine)').matches) {
  const orbs = document.querySelectorAll('.hero .orb');
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;

  window.addEventListener('pointermove', (event) => {
    targetX = event.clientX / window.innerWidth - 0.5;
    targetY = event.clientY / window.innerHeight - 0.5;
  }, { passive: true });

  const animateAmbient = () => {
    currentX += (targetX - currentX) * 0.035;
    currentY += (targetY - currentY) * 0.035;
    orbs.forEach((orb, index) => {
      const depth = index === 0 ? 28 : -18;
      orb.style.transform = `translate3d(${currentX * depth}px, ${currentY * depth}px, 0)`;
    });
    window.requestAnimationFrame(animateAmbient);
  };

  window.requestAnimationFrame(animateAmbient);
}
