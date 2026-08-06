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

    // Seção Sobre / Filosofia
    manifestoSectionTag: "[ SOBRE // FILOSOFIA ]",
    manifestoTitle:
      'Código não é apenas um sistema executável. É a <span class="accent-highlight">engenharia invisível</span> que garante resiliência, segurança e confiabilidade a operações críticas.',

    // Card 1
    card1Tag: "01 // BASE TÉCNICA",
    card1Title: "Engenharia Backend",
    card1Desc:
      "Desenvolvimento e estruturação de APIs RESTful utilizando Java, ecossistema Spring Boot, JPA/Hibernate e modelagem de bancos de dados relacionais.",

    // Card 2
    card2Tag: "02 // SEGURANÇA & INFRA",
    card2Title: "DevSecOps & Cloud",
    card2Desc:
      "Práticas de segurança no ciclo de vida de software, conteinerização com Docker, integração contínua (CI/CD) e aplicação das recomendações do OWASP Top 10.",

    // Card 3
    card3Tag: "03 // FUNDAMENTAÇÃO",
    card3Title: "Arquitetura & Qualidade",
    card3Desc:
      "Aplicação prática de princípios de Clean Architecture, Clean Code, testes e estudo contínuo em sistemas distribuídos e observabilidade.",
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

    // About / Philosophy Section
    manifestoSectionTag: "[ ABOUT // PHILOSOPHY ]",
    manifestoTitle:
      'Code is not merely executable logic. It is the <span class="accent-highlight">invisible engineering</span> that ensures resilience, security, and reliability for critical operations.',

    // Card 1
    card1Tag: "01 // CORE STACK",
    card1Title: "Backend Engineering",
    card1Desc:
      "Development and structuring of RESTful APIs using Java, Spring Boot ecosystem, JPA/Hibernate, and relational database modeling.",

    // Card 2
    card2Tag: "02 // SECURITY & INFRA",
    card2Title: "DevSecOps & Cloud",
    card2Desc:
      "Security practices in the software lifecycle, containerization with Docker, continuous integration (CI/CD), and applying OWASP Top 10 guidelines.",

    // Card 3
    card3Tag: "03 // FOUNDATION",
    card3Title: "Architecture & Quality",
    card3Desc:
      "Practical application of Clean Architecture principles, Clean Code, testing, and ongoing study in distributed systems and observability.",
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
        if (key === "heroTitle" || key === "manifestoTitle") {
          el.innerHTML = translations[currentLang][key];
        } else {
          el.textContent = translations[currentLang][key];
        }
      }
    });
  });
}
