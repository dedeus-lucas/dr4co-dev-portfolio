import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initManifestoAnimations() {
  const manifestoSection = document.querySelector(".manifesto-section");
  if (!manifestoSection) return;

  const quote = manifestoSection.querySelector(".manifesto-quote");
  if (quote) {
    gsap.from(quote, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: quote,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }

  const cards = manifestoSection.querySelectorAll(".manifesto-card");
  if (cards.length > 0) {
    gsap.from(cards, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      clearProps: "transform",
      scrollTrigger: {
        trigger: ".manifesto-grid",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  }
}
