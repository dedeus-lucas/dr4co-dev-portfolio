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
  ];

  sections.forEach((sec, idx) => {
    sec.style.position = "relative";

    const hudContainer = document.createElement("div");
    hudContainer.className = "hud-data-overlay";

    // Cria 2 tags hexadecimais por seção em posições estratégicas
    for (let i = 0; i < 2; i++) {
      const dataTag = document.createElement("div");
      dataTag.className = "hud-data-tag";

      const randomHex = hexCodes[Math.floor(Math.random() * hexCodes.length)];
      dataTag.innerHTML = `<span class="hud-tag-icon">[+]</span> ${randomHex}`;

      if (i === 0) {
        dataTag.style.top = "15%";
        dataTag.style.left = idx % 2 === 0 ? "3%" : "85%";
      } else {
        dataTag.style.bottom = "15%";
        dataTag.style.right = idx % 2 === 0 ? "4%" : "82%";
      }

      hudContainer.appendChild(dataTag);
    }

    sec.appendChild(hudContainer);
  });
}
