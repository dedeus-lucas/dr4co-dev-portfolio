import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initManifestoAnimations() {
  const manifestoSection = document.querySelector(".manifesto-section");
  if (!manifestoSection) return;

  // 1. Color-Shift: Muda o tom de fundo suavemente ao entrar na seção
  ScrollTrigger.create({
    trigger: manifestoSection,
    start: "top 60%",
    end: "bottom 40%",
    onEnter: () => {
      document.body.style.backgroundColor = "var(--bg-secondary)";
    },
    onLeaveBack: () => {
      document.body.style.backgroundColor = "var(--bg-primary)";
    },
  });

  // 2. Text Reveal Animation para a frase do manifesto e os cards
  const elementsToAnimate = manifestoSection.querySelectorAll(
    ".manifesto-quote, .manifesto-card",
  );

  gsap.from(elementsToAnimate, {
    y: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: manifestoSection,
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
  });
}
