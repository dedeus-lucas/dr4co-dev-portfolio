import "./styles/variables.css";
import "./styles/reset.css";
import "./styles/cursor.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/manifesto.css";

import { initSmoothScroll } from "./scripts/lenis.js";
import { initHudCursor } from "./scripts/cursor.js";
import { initNavbarScroll } from "./scripts/navbar.js";
import { initHeroCarousel } from "./scripts/hero.js";
import { initManifestoAnimations } from "./scripts/manifesto.js";

document.addEventListener("DOMContentLoaded", () => {
  initSmoothScroll();
  initHudCursor();
  initNavbarScroll();
  initHeroCarousel();
  initManifestoAnimations();
  console.log("[SYSTEM] Manifesto Section & Color Shift initialized.");
});
