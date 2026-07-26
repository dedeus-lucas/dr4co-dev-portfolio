export function initHeroCarousel() {
  const slides = document.querySelectorAll(".hero-bg-slide");
  if (slides.length === 0) return;

  let currentSlide = 0;
  const slideInterval = 5000;

  setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }, slideInterval);
}
