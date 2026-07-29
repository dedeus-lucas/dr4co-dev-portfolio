export const translations = {
  "pt-BR": {
    badge: "[ FULL-STACK & SYSTEMS ARCHITECTURE ]",
    heroTitle:
      'Engenharia de Sistemas Resilientes <span class="accent-amp">&amp;</span> Cloud Security',
    subtitle:
      "Construindo microsserviços resilientes, arquitetura distribuída, automação DevSecOps e segurança em nuvem.",
    btnProjects: "Ver Arquitetura",
    btnContact: "Iniciar Contato",
    navExp: "Experiência",
    navProj: "Projetos",
    navStack: "Stack",
    navContact: "Contato",
  },
  "en-US": {
    badge: "[ FULL-STACK & SYSTEMS ARCHITECTURE ]",
    heroTitle:
      'Resilient Systems Engineering <span class="accent-amp">&amp;</span> Cloud Security',
    subtitle:
      "Building resilient microservices, distributed architecture, DevSecOps automation, and cloud security.",
    btnProjects: "View Architecture",
    btnContact: "Get in Touch",
    navExp: "Experience",
    navProj: "Projects",
    navStack: "Stack",
    navContact: "Contact",
  },
};

let currentLang = "pt-BR";

export function initI18n() {
  const langBtn = document.querySelector(".lang-selector");
  if (!langBtn) return;

  langBtn.addEventListener("click", () => {
    currentLang = currentLang === "pt-BR" ? "en-US" : "pt-BR";
    langBtn.textContent = `[ ${currentLang.toUpperCase()} ]`;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (translations[currentLang][key]) {
        if (key === "heroTitle") {
          el.innerHTML = translations[currentLang][key];
        } else {
          el.textContent = translations[currentLang][key];
        }
      }
    });
  });
}
