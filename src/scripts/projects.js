import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initHorizontalProjectsScroll() {
  const pinWrapper = document.querySelector(".projects-pin-wrapper");
  const track = document.querySelector(".projects-track");

  if (!pinWrapper || !track) return;

  if (window.innerWidth <= 900) return;

  const getScrollAmount = () => {
    return track.scrollWidth - window.innerWidth + 140;
  };

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
