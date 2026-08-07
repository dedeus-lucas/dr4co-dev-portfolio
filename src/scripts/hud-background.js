export function initHudBackground() {
  const sections = document.querySelectorAll(
    ".manifesto-section, .journey-section",
  );

  const hexCodes = [
    "0x7F_SYS_CORE // SEC_9",
    "0x3A_NET_NODE // ACTIVE",
    "0x9E_MEM_GHOST // INIT",
    "0x12_PORT_8080 // LISTEN",
    "0x8C_CRYPT_KEY // OK",
    "0x41_BUFFER_OVERFLOW",
    "0x5D_DAEMON_RUNNING",
    "0x00_KERNEL_PANIC // RECOVERED",
  ];

  sections.forEach((sec) => {
    sec.style.position = "relative";

    const hudContainer = document.createElement("div");
    hudContainer.className = "hud-data-overlay";

    for (let i = 0; i < 4; i++) {
      const dataText = document.createElement("div");
      dataText.className = "hud-text-pure";

      const randomCode = hexCodes[Math.floor(Math.random() * hexCodes.length)];
      dataText.textContent = randomCode;

      const topPos = Math.floor(Math.random() * 80 + 10);
      const leftPos = Math.floor(Math.random() * 80 + 10);

      const animDuration = (Math.random() * 3 + 3).toFixed(1);
      const animDelay = (Math.random() * 4).toFixed(1);

      dataText.style.cssText = `
        top: ${topPos}%;
        left: ${leftPos}%;
        animation-duration: ${animDuration}s;
        animation-delay: ${animDelay}s;
      `;

      hudContainer.appendChild(dataText);
    }

    sec.appendChild(hudContainer);
  });
}
