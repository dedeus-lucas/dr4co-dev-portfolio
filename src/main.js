import "./styles/variables.css";
import "./styles/reset.css";
import "./styles/cursor.css";

import { initSmoothScroll } from "./scripts/lenis.js";
import { initHudCursor } from "./scripts/cursor.js";

document.addEventListener("DOMContentLoaded", () => {
  initSmoothScroll();
  initHudCursor();
  console.log("[SYSTEM] Smooth Scroll and HUD Cursor initialized.");
});
