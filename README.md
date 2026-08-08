# ⚡ DR4CO.DEV // Cybernetic Portfolio System (SYS.v2)

![Status](https://img.shields.io/badge/STATUS-OPERATIONAL-00f0ff?style=for-the-badge&logo=cloudflare)
![License](https://img.shields.io/badge/LICENSE-MIT-purple?style=for-the-badge)
![Vite](https://img.shields.io/badge/BUILD-VITE_5-646CFF?style=for-the-badge&logo=vite)
![Stack](https://img.shields.io/badge/STACK-JAVA%20%7C%20SPRING%20BOOT%20%7C%20DEVSECOPS-green?style=for-the-badge)

Portfólio de engenharia de software e arquitetura backend de alta resiliência, desenvolvido com estética Retro-Cyberpunk Tática (inspirado na direção de arte de Ghost in the Shell / Masamune Shirow) e alta performance de renderização no navegador.

---

## 🛠️ Arquitetura e Engenharia Frontend

- Bundler & Build Tool: Vite 5 para HMR ultra-rápido e empacotamento otimizado.
- Animações & Layout: GSAP com ScrollTrigger para rolagem horizontal tática (projects.js) e Lenis para Smooth Scroll.
- Interface e HUD: Pseudo-código de fundo estilo Java/Spring Boot iluminado por holofote tático (Spotlight Sweep Mask em CSS3 puro).
- Internacionalização (i18n): Sistema nativo em JavaScript para alternância dinâmica de idioma (pt-BR / en-US) sem dependência de bibliotecas externas.
- Design System: Vidro fumaça (Glassmorphism), acentos Neon Ciano (#00F0FF), variáveis CSS modularizadas e responsividade Mobile-First.

---

## 🗂️ Estrutura do Projeto

```text
dr4co-dev-portfolio/
├── public/                 # Assets estáticos de build
├── src/
│   ├── assets/             # Imagens, artes e ícones
│   ├── scripts/            # Lógica JS modularizada
│   │   ├── cursor.js       # HUD Custom Cursor
│   │   ├── footer-year.js  # Copyright dinâmico
│   │   ├── hero.js         # Carrossel do Hero
│   │   ├── hud-background.js # Código Java iluminado por lanterna
│   │   ├── i18n.js         # Dicionário de tradução bilíngue
│   │   ├── lenis.js        # Smooth Scrolling Lenis/GSAP
│   │   ├── manifesto.js    # Animações de entrada
│   │   ├── navbar.js       # Scroll behavior da barra de navegação
│   │   └── projects.js     # Scroll horizontal dos cards
│   └── styles/             # Módulos CSS isolados por seção
├── index.html              # Estrutura HTML5 semântica
├── vite.config.js          # Configuração de build do Vite
├── package.json            # Dependências e scripts do projeto
├── LICENSE                 # Licença MIT
└── README.md               # Documentação técnica do repositório
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js (versão 18.x ou superior)
- npm ou pnpm

### Passo a Passo

1. Clone o repositório:

    ```bash
    git clone https://github.com/dedeus-lucas/dr4co-dev-portfolio.git
    cd dr4co-dev-portfolio
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Inicie o servidor de desenvolvimento:

    ```bash
    npm run dev
    ```

4. Acesse no navegador:
    http://localhost:3000

---

## 📦 Build e Deploy no Cloudflare Pages

Para gerar o pacote de produção otimizado:

```bash
npm run build
```

O diretório final gerado será o /dist.

### Configuração no Cloudflare Pages:
- Framework preset: None (Static HTML/JS)
- Build command: npm run build
- Build output directory: dist

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo LICENSE para mais detalhes.

---

<p align="center">
  <b>DR4CO ARCHITECTURE &copy; 2024 - 2026 // ALL RIGHTS RESERVED</b>
</p>