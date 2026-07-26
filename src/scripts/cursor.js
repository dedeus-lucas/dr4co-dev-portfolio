import { gsap } from "gsap";

export function initHudCursor() {
  const cursorDot = document.querySelector(".hud-cursor-dot");
  const cursorRing = document.querySelector(".hud-cursor-ring");

  if (!cursorDot || !cursorRing) return;

  const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const mouse = { x: pos.x, y: pos.y };

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  // Animação contínua e suave perseguindo o mouse via GSAP ticker
  gsap.ticker.add(() => {
    const dt = 1 - Math.pow(1 - 0.2, gsap.ticker.deltaRatio());
    pos.x += (mouse.x - pos.x) * dt;
    pos.y += (mouse.y - pos.y) * dt;

    gsap.set(cursorDot, { x: mouse.x, y: mouse.y });
    gsap.set(cursorRing, { x: pos.x, y: pos.y });
  });

  // Adiciona efeito visual ao passar sobre botões e links
  const interactiveElements = document.querySelectorAll(
    'a, button, [data-cursor="hover"]',
  );
  interactiveElements.forEach((el) => {
    el.addEventListener("mouseenter", () =>
      document.body.classList.add("cursor-hover"),
    );
    el.addEventListener("mouseleave", () =>
      document.body.classList.remove("cursor-hover"),
    );
  });
}
