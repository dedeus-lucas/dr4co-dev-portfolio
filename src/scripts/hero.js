export function initHeroCarousel() {
  const slides = document.querySelectorAll(".hero-bg-slide");
  if (slides.length <= 1) return;

  let currentSlide = 0;

  setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }, 5000);
}
