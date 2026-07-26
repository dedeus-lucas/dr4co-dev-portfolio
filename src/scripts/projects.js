import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initHorizontalProjectsScroll() {
  const pinWrapper = document.querySelector(".projects-pin-wrapper");
  const track = document.querySelector(".projects-track");

  if (!pinWrapper || !track) return;

  // Função para calcular a distância exata de deslocamento para a esquerda
  const getScrollAmount = () => {
    return track.scrollWidth - window.innerWidth + 120;
  };

  // Trava a tela e transforma o scroll vertical em deslocamento horizontal
  gsap.to(track, {
    x: () => -getScrollAmount(),
    ease: "none",
    scrollTrigger: {
      trigger: pinWrapper,
      start: "top top",
      end: () => `+=${getScrollAmount()}`,
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
    },
  });
}
