import "./styles/variables.css";
import "./styles/reset.css";

import { initSmoothScroll } from "./scripts/lenis.js";

document.addEventListener("DOMContentLoaded", () => {
  initSmoothScroll();
  console.log("[SYSTEM] Lenis Smooth Scroll initialized.");
});
