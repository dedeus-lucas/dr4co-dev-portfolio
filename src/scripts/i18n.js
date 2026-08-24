export const translations = {
  "pt-BR": {
    // Hero Section
    btnProjects: "Ver Projetos",
    btnContact: "Iniciar Contato",

    // Navbar Links
    navExp: "Sobre",
    navJourney: "Jornada",
    navStack: "Stack",
    navProj: "Projetos",
    navContact: "Contato",

    // Seção 2: Sobre / Filosofia
    manifestoSectionTag: "[ SOBRE // FILOSOFIA ]",
    manifestoTitle:
      'Segurança não é uma camada sobreposta. É a <span class="highlight">engenharia invisível</span> que garante resiliência, mitigação de riscos e integridade operacional contínua.',
    card1Tag: "01 // SECURITY ENGINEERING",
    card1Title: "Engenharia de Cibersegurança",
    card1Desc:
      "Arquitetura de sistemas resilientes, segurança e proteção de APIs RESTful, modelagem de ameaças e isolamento criptográfico em memória RAM (AES-256-GCM / Java 21).",
    card2Tag: "02 // RED TEAM & PENTEST",
    card2Title: "Segurança Ofensiva & Testes",
    card2Desc:
      "Fundamentos de testes de intrusão, mapeamento do OWASP Top 10, simulação de adversários, auditoria ativa de vulnerabilidades e automação de scripts táticos com Python.",
    card3Tag: "03 // DEVSECOPS & CLOUD",
    card3Title: "DevSecOps & Cloud Security",
    card3Desc:
      "Esteiras de CI/CD blindadas com SAST (Semgrep), SCA (Snyk), Secret Scanning (TruffleHog), hardening de contêineres Docker e gestão de postura de segurança em Cloud (AWS/GCP).",

    // Seção 3: Jornada / Trajetória
    journeySectionTag: "[ JORNADA // TRAJETÓRIA ]",
    journeyTitle:
      "Evolução técnica contínua e fundamentada em engenharia e segurança ofensiva",
    journeySubtitle:
      "Construção gradual de conhecimento prático, transicionando da base teórica e suporte operacional para arquitetura de sistemas seguros, DevSecOps e simulação de adversários.",
    j2024Title: "Fundamentos & Ciência da Computação",
    j2024Desc:
      "Ingresso no Bacharelado em Ciência da Computação. Consolidação dos pilares de redes, arquitetura de SO (Linux/Windows), algoritmos, programação orientada a objetos e base em C, Java e automação.",
    j2025Title: "Backend Seguro, Cloud & DevSecOps",
    j2025Desc:
      "Ingresso em ADS na UESB e especializações em DevSecOps e Cibersegurança (Hackers do Bem, Mente Binária, AWS re/Start). Aprofundamento em Java 21, Spring Boot, Spring Security, Docker e Cloud Security (AWS/GCP).",
    j2026Title: "Projetos Críticos, Suporte & Sentinel Vault",
    j2026Desc:
      "Atuação prática em suporte técnico e ambientes computacionais (Rede ProCursos). Desenvolvimento do ecossistema autoral Sentinel Vault, integração de esteiras CI/CD com SAST/SCA e automações em Python.",
    jFutureTitle: "Cybersecurity Engineering & Red Team",
    jFutureDesc:
      "Especialização avançada em Application Security (AppSec), Red Teaming, pentest de aplicações complexas, mitigação de ameaças em tempo real e arquitetura de sistemas distribuídos resilientes.",

    // Seção 4: Stack Técnico (Bento Grid)
    stackSectionTag: "[ STACK // TECNOLOGIAS ]",
    stackTitle: "Tecnologias, Ferramentas e Ecossistema Tático",
    catBackendTitle: "Engenharia Backend",
    catBackendDesc:
      "Desenvolvimento de APIs RESTful resilientes, microsserviços, persistência de dados segura e arquitetura limpa.",
    catSecurityTitle: "DevSecOps & Cloud Security",
    catSecurityDesc:
      "Automação de infraestrutura, conteinerização Docker, práticas de AppSec em esteiras e gerenciamento de nuvem.",
    catToolsTitle: "Linguagens & Ecossistema",
    catToolsDesc:
      "Linguagens compiladas e interpretadas utilizadas para desenvolvimento de ferramentas de auditoria, inspeção e automação.",
    card4Tag: "04 // QUALIDADE & BOAS PRÁTICAS",
    catQualityTitle: "Qualidade de Código & Segurança Ativa",
    catQualityDesc:
      "Aplicação de Clean Code, testes unitários, isolamento de credenciais em memória RAM e práticas de Security Hardening.",

    // Seção 5: Projetos
    projectsSectionTag: "[ PROJETOS // ENGENHARIA & ARQUITETURA ]",
    projectsScrollHint: "// ARRASTE OU USE O SCROLL PARA NAVEGAR",
    projectCaseBtn: "VER DETALHES \u2192",

    p1Cat: "01 // VAULT & CRIPTOGRAFIA",
    p1Title: "Sentinel-Vault Core Engine",
    p1Desc:
      "Núcleo central de cofre criptográfico projetado para isolamento estrito de credenciais através do algoritmo AES-256-GCM. Elimina o vazamento de segredos em pipelines de CI/CD e infraestruturas distribuídas, oferecendo auditoria imutável e controle de acesso baseado em papéis.",

    p2Cat: "02 // INJEÇÃO EM MEMÓRIA",
    p2Title: "Sentinel Env Injector",
    p2Desc:
      "Extensão para Spring Boot que intercepta a inicialização do contexto para injetar segredos do Vault diretamente na memória RAM volátil. Garante persistência zero em disco ao aplicar higienização ativa com sobrescrita de zeros em buffers sensíveis e vetores criptográficos.",

    p3Cat: "03 // API & MICROSSERVIÇOS",
    p3Title: "Identity Guard OAuth2 Server",
    p3Desc:
      "Servidor centralizado de autenticação e autorização com suporte a tokens JWT e controle de acesso RBAC construído em Spring Boot.",

    p4Cat: "04 // DEVSECOPS & INFRA",
    p4Title: "Hardened Pipeline CI/CD",
    p4Desc:
      "Pipeline automatizado com análise estática de código (SAST), verificação de dependências vulneráveis (SCA) e deploy seguro em contêineres Docker.",

    p5Cat: "05 // SISTEMAS DISTRIBUÍDOS",
    p5Title: "Event Stream Telemetry",
    p5Desc:
      "Arquitetura orientada a eventos para coleta, agregação e processamento de logs de auditoria distribuídos em tempo real com alta disponibilidade.",

    p6Cat: "06 // CLI & APPSEC",
    p6Title: "Hyperion Packet Monitor",
    p6Desc:
      "Ferramenta CLI para inspeção tática, sniffing estruturado e análise de integridade de tráfego de rede focada em detecção de anomalias.",

    p7Cat: "07 // BANCO DE DADOS",
    p7Title: "Dicionário Eletrônico Engine",
    p7Desc:
      "Motor de busca lexical otimizado para dicionários técnicos com modelagem avançada de persistência e APIs de consulta rápida.",

    p8Cat: "08 // ARQUITETURA DEFENSIVA",
    p8Title: "Cloud Shield Orchestrator",
    p8Desc:
      "Orquestrador defensivo em desenvolvimento focado no gerenciamento e imposição de políticas de segurança ativas em nuvem híbrida.",

    // Seção 6: Contato
    contactTag: "[ CONTATO // CANAIS DIRETO ]",
    contactTitle:
      'Pronto para construir <span class="highlight">sistemas blindados</span> e de alto impacto?',
    contactDesc:
      "Aberto a oportunidades profissionais, colaboração em engenharia backend segura, auditorias de código e segurança de infraestrutura.",
    protoCardNum: "01 // DISPONIBILIDADE TÁTICA",
    protoTitle: "Oportunidades & Atuação",
    protoDesc:
      "Aberto a contratações para posições de Estágio, Desenvolvedor Júnior e funções de engenharia backend/DevSecOps e AppSec em nível inicial.",
    statusText: "STATUS: DISPONÍVEL PARA ESTÁGIO E JÚNIOR",
    timeLabel: "Tempo Médio de Resposta:",
    timeValue: "< 12 Horas",
    footerRights: "TODOS OS DIREITOS RESERVADOS.",
    navResume: "CURRÍCULO",
  },
  "en-US": {
    // Hero Section
    btnProjects: "View Projects",
    btnContact: "Get in Touch",

    // Navbar Links
    navExp: "About",
    navJourney: "Journey",
    navStack: "Stack",
    navProj: "Projects",
    navContact: "Contact",

    // Section 2: About / Philosophy (Aligned with Resume & Cybersecurity Focus)
    manifestoSectionTag: "[ ABOUT // PHILOSOPHY ]",
    manifestoTitle:
      'Security is not an added layer. It is the <span class="highlight">invisible engineering</span> that ensures resilience, risk mitigation, and continuous operational integrity.',
    card1Tag: "01 // SECURITY ENGINEERING",
    card1Title: "Cybersecurity Engineering",
    card1Desc:
      "Resilient systems architecture, REST API security and hardening, threat modeling, and in-memory cryptographic isolation (AES-256-GCM / Java 21).",
    card2Tag: "02 // RED TEAM & PENTEST",
    card2Title: "Offensive Security & Testing",
    card2Desc:
      "Penetration testing fundamentals, OWASP Top 10 mitigation, adversary emulation, active vulnerability assessment, and tactical script automation via Python.",
    card3Tag: "03 // DEVSECOPS & CLOUD",
    card3Title: "DevSecOps & Cloud Security",
    card3Desc:
      "Hardened CI/CD pipelines with SAST (Semgrep), SCA (Snyk), Secret Scanning (TruffleHog), Docker container hardening, and cloud security posture management (AWS/GCP).",

    // Section 3: Journey / Trajectory
    journeySectionTag: "[ JOURNEY // TRAJECTORY ]",
    journeyTitle:
      "Continuous technical evolution grounded in software engineering and offensive security",
    journeySubtitle:
      "Gradual building of practical knowledge, transitioning from theoretical fundamentals and operational support to secure systems architecture, DevSecOps, and adversary simulation.",
    j2024Title: "Fundamentals & Computer Science",
    j2024Desc:
      "Formal entry into B.S. in Computer Science. Consolidation of structural pillars in networking, OS architecture (Linux/Windows), algorithms, OOP, and foundations in C, Java, and scripting.",
    j2025Title: "Secure Backend, Cloud & DevSecOps",
    j2025Desc:
      "Entry into Systems Analysis and Development at UESB and specialized cybersecurity programs (Hackers do Bem, Mente Binária, AWS re/Start). Deep dive into Java 21, Spring Boot, Spring Security, Docker, and Cloud Security (AWS/GCP).",
    j2026Title: "Critical Projects, Support & Sentinel Vault",
    j2026Desc:
      "Hands-on IT support and computing environments operations (Rede ProCursos). Development of the proprietary Sentinel Vault ecosystem, CI/CD pipeline integration with SAST/SCA, and Python automation.",
    jFutureTitle: "Cybersecurity Engineering & Red Team",
    jFutureDesc:
      "Advanced specialization in Application Security (AppSec), Red Teaming, complex application penetration testing, real-time threat mitigation, and resilient distributed systems architecture.",

    // Section 4: Technical Stack (Bento Grid)
    stackSectionTag: "[ STACK // TECHNOLOGIES ]",
    stackTitle: "Technologies, Tools and Tactical Ecosystem",
    catBackendTitle: "Backend Engineering",
    catBackendDesc:
      "Development of resilient RESTful APIs, microservices, secure data persistence, and clean architecture.",
    catSecurityTitle: "DevSecOps & Cloud Security",
    catSecurityDesc:
      "Infrastructure automation, Docker containerization, pipeline AppSec practices, and cloud management.",
    catToolsTitle: "Languages & Ecosystem",
    catToolsDesc:
      "Compiled and interpreted programming languages used for developing audit tools, network sniffers, and automation scripts.",
    card4Tag: "04 // QUALITY & BEST PRACTICES",
    catQualityTitle: "Code Quality & Active Security",
    catQualityDesc:
      "Application of Clean Code, unit testing, in-memory credential isolation in RAM, and Security Hardening practices.",

    // Section 5: Projects
    projectsSectionTag: "[ PROJECTS // ENGINEERING & ARCHITECTURE ]",
    projectsScrollHint: "// DRAG OR SCROLL HORIZONTALLY TO EXPLORE",
    projectCaseBtn: "VIEW DETAILS \u2192",

    p1Cat: "01 // VAULT & CRYPTOGRAPHY",
    p1Title: "Sentinel-Vault Core Engine",
    p1Desc:
      "Central cryptographic vault core engineered for strict credential isolation via the AES-256-GCM algorithm. Eliminates secret leakage across CI/CD pipelines and distributed infrastructures while providing immutable auditing and role-based access control.",

    p2Cat: "02 // IN-MEMORY INJECTION",
    p2Title: "Sentinel Env Injector",
    p2Desc:
      "Spring Boot extension that intercepts context initialization to inject Vault secrets directly into volatile RAM memory. Guarantees zero-disk persistence by applying active hygiene with zero-overwrite across sensitive buffers and cryptographic vectors.",

    p3Cat: "03 // API & MICROSERVICES",
    p3Title: "Identity Guard OAuth2 Server",
    p3Desc:
      "Centralized authentication and authorization server with JWT token support and RBAC access control built in Spring Boot.",

    p4Cat: "04 // DEVSECOPS & INFRA",
    p4Title: "Hardened Pipeline CI/CD",
    p4Desc:
      "Automated pipeline with static code analysis (SAST), vulnerable dependency scanning (SCA), and secure Docker container deployment.",

    p5Cat: "05 // DISTRIBUTED SYSTEMS",
    p5Title: "Event Stream Telemetry",
    p5Desc:
      "Event-driven architecture for collecting, aggregating, and processing real-time distributed audit logs with high availability.",

    p6Cat: "06 // CLI & APPSEC",
    p6Title: "Hyperion Packet Monitor",
    p6Desc:
      "Tactical CLI tool for packet inspection, structured sniffing, and network traffic integrity analysis focused on anomaly detection.",

    p7Cat: "07 // DATABASE ENGINE",
    p7Title: "Electronic Dictionary Engine",
    p7Desc:
      "Optimized lexical search engine for technical dictionaries featuring advanced persistence modeling and fast lookup APIs.",

    p8Cat: "08 // DEFENSIVE ARCHITECTURE",
    p8Title: "Cloud Shield Orchestrator",
    p8Desc:
      "Defensive orchestrator under active development focused on managing and enforcing active security policies across hybrid cloud environments.",

    // Section 6: Contact
    contactTag: "[ CONTACT // DIRECT CHANNELS ]",
    contactTitle:
      'Ready to build <span class="highlight">hardened systems</span> with high impact?',
    contactDesc:
      "Open to career opportunities, secure backend engineering collaboration, code audits, and infrastructure security.",
    protoCardNum: "01 // TACTICAL AVAILABILITY",
    protoTitle: "Opportunities & Roles",
    protoDesc:
      "Open to hiring for Internship positions, Junior Developer, and entry-level backend engineering/DevSecOps/AppSec roles.",
    statusText: "STATUS: AVAILABLE FOR INTERNSHIP & JUNIOR ROLES",
    timeLabel: "Average Response Time:",
    timeValue: "< 12 Hours",
    footerRights: "ALL RIGHTS RESERVED.",
    navResume: "RÉSUMÉ",
  },
};

let currentLang = "pt-BR";

export function initI18n() {
  const langBtns = document.querySelectorAll(".lang-selector");
  if (!langBtns.length) return;

  langBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentLang = currentLang === "pt-BR" ? "en-US" : "pt-BR";

      langBtns.forEach((b) => {
        b.textContent = `[ ${currentLang.toUpperCase()} ]`;
      });

      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.dataset.i18n;
        if (translations[currentLang][key]) {
          if (key === "manifestoTitle" || key === "contactTitle") {
            el.innerHTML = translations[currentLang][key];
          } else {
            el.textContent = translations[currentLang][key];
          }
        }
      });
    });
  });
}
