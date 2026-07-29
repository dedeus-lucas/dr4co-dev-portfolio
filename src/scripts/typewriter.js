import { translations, getCurrentLang } from "./i18n.js";

let typewriterTimeout;

export function typeWriterEffect() {
  const titleEl = document.querySelector(".hero-title-text");
  if (!titleEl) return;

  clearTimeout(typewriterTimeout);

  const lang = getCurrentLang();
  const fullText = translations[lang].typewriterText;

  titleEl.textContent = "";
  let index = 0;

  function typeNextChar() {
    if (index < fullText.length) {
      titleEl.textContent += fullText.charAt(index);
      index++;
      typewriterTimeout = setTimeout(typeNextChar, 35); // Velocidade de digitação
    }
  }

  typeNextChar();
}
