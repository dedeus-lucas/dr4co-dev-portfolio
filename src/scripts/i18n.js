export const translations = {
  "pt-BR": {
    badge: "[ FULL-STACK & SYSTEMS ARCHITECTURE ]",
    subtitle:
      "Construindo microsserviços resilientes, arquitetura distribuída, automação DevSecOps e segurança em nuvem.",
    btnProjects: "Ver Arquitetura",
    btnContact: "Iniciar Contato",
    navExp: "Experiência",
    navProj: "Projetos",
    navStack: "Stack",
    navContact: "Contato",
    typewriterText: "Engenharia de Sistemas Resilientes & Cloud Security",
  },
  "en-US": {
    badge: "[ FULL-STACK & SYSTEMS ARCHITECTURE ]",
    subtitle:
      "Building resilient microservices, distributed architecture, DevSecOps automation, and cloud security.",
    btnProjects: "View Architecture",
    btnContact: "Get in Touch",
    navExp: "Experience",
    navProj: "Projects",
    navStack: "Stack",
    navContact: "Contact",
    typewriterText: "Resilient Systems Engineering & Cloud Security",
  },
};

let currentLang = "pt-BR";

export function initI18n(onLangChange) {
  const langBtn = document.querySelector(".lang-selector");
  if (!langBtn) return;

  langBtn.addEventListener("click", () => {
    currentLang = currentLang === "pt-BR" ? "en-US" : "pt-BR";
    langBtn.textContent = `[ ${currentLang.toUpperCase()} ]`;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset("data-i18n");
      if (translations[currentLang][key]) {
        el.textContent = translations[currentLang][key];
      }
    });

    if (onLangChange) {
      onLangChange(currentLang);
    }
  });
}

export function getCurrentLang() {
  return currentLang;
}
