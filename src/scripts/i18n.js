export const translations = {
  "pt-BR": {
    badge: "[ BACKEND DEVELOPER // DEVSECOPS ]",
    heroTitle:
      'Desenvolvendo <span class="accent-highlight">Sistemas Resilientes</span> e Arquitetura de Software',
    subtitle:
      "Desenvolvedor focado na construção de aplicações backend robustas, automação DevSecOps, microsserviços e segurança em nuvem.",
    btnProjects: "Ver Projetos",
    btnContact: "Iniciar Contato",
    navExp: "Experiência",
    navProj: "Projetos",
    navStack: "Stack",
    navContact: "Contato",
  },
  "en-US": {
    badge: "[ BACKEND DEVELOPER // DEVSECOPS ]",
    heroTitle:
      'Developing <span class="accent-highlight">Resilient Systems</span> and Software Architecture',
    subtitle:
      "Developer focused on building robust backend applications, DevSecOps automation, microservices, and cloud security.",
    btnProjects: "View Projects",
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
