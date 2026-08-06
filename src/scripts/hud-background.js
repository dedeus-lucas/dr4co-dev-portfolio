export function initHudBackground() {
  const sections = document.querySelectorAll(
    ".manifesto-section, .journey-section",
  );

  sections.forEach((sec) => {
    const hudContainer = document.createElement("div");
    hudContainer.className = "hud-data-overlay";
    hudContainer.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      pointer-events: none;
      z-index: 1;
    `;

    for (let i = 0; i < 3; i++) {
      const dataTag = document.createElement("span");
      dataTag.className = "hud-data-tag";
      dataTag.textContent = `[ 0x${Math.floor(Math.random() * 8999 + 1000)
        .toString(16)
        .toUpperCase()} // NET_LOG ]`;
      dataTag.style.cssText = `
        position: absolute;
        font-family: var(--font-mono);
        font-size: 0.65rem;
        color: #00f0ff;
        text-shadow: 0 0 8px rgba(0, 240, 255, 0.8);
        opacity: 0.25;
        top: ${20 + i * 30}%;
        ${i % 2 === 0 ? "left: 4%;" : "right: 4%;"}
        letter-spacing: 0.15em;
      `;
      hudContainer.appendChild(dataTag);
    }

    sec.style.position = "relative";
    sec.appendChild(hudContainer);
  });
}
