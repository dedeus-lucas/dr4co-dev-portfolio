import "./styles/variables.css";
import "./styles/reset.css";
import "./styles/cursor.css";
import "./styles/navbar.css";

import { initSmoothScroll } from "./scripts/lenis.js";
import { initHudCursor } from "./scripts/cursor.js";
import { initNavbarScroll } from "./scripts/navbar.js";

document.addEventListener("DOMContentLoaded", () => {
  initSmoothScroll();
  initHudCursor();
  initNavbarScroll();
  console.log("[SYSTEM] Navbar, Smooth Scroll, and HUD Cursor initialized.");
});
