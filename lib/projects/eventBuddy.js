import getPlaceholder from "../../utils/getPlaceholder";
import { FaDocker,FaJava,FaReact } from "react-icons/fa";
import { RiJavascriptFill,RiTailwindCssFill } from "react-icons/ri";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiShadcnui } from "react-icons/si";

const eventBuddy = {
  heading: `Event Buddy`,
  url: `https://event-buddy-yqsz.onrender.com/`,
  github: "https://github.com/JanPSchwarz/Event-Buddy",
  description: (
    <>
      Event Buddy ist eine Event-Plattform, die speziell für kleinere
      Organisationen, Indie-Veranstalter, Künstler und Theater entwickelt wurde.
      Die Anwendung bietet umfassende Verwaltungs- und Buchungsfunktionen, um
      die Organisation von Events zu vereinfachen.
      <br />
      <br />
      Das Projekt wurde mit einem modernen Tech-Stack realisiert: Das Frontend
      basiert auf React mit TypeScript, während das Backend mit Java und Spring
      Boot entwickelt wurde.
      <br />
      <br />
      Testing & Qualitätssicherung: Das Backend verfügt über umfassende JUnit
      5-Tests mit Mockito für Unit-Tests und Testcontainers für
      Integrationstests mit MongoDB. Die Testabdeckung und Code-Qualität werden
      kontinuierlich über SonarCloud überwacht, um hohe Wartbarkeit und
      Zuverlässigkeit sicherzustellen.
      <br />
      <br />
      Deployment: Die Anwendung wird containerisiert mit Docker bereitgestellt,
      wobei ein mehrstufiger Build-Prozess Frontend und Backend effizient
      kombiniert. Das Live-Deployment erfolgt auf Render, wo die Anwendung
      produktiv läuft. Die API ist vollständig mit Swagger V3 dokumentiert.
      <br />
      <br />
      <a href="https://event-buddy-yqsz.onrender.com/" target="_blank">
        <strong>Schau es dir an!</strong>
      </a>
    </>
  ),
  images: [
    {
      href: `/assets/eventBuddy/eventBuddy-collection.webp`,
      figcaption: "responsive designed",
      alt: "eventBuddy app",
      hash: getPlaceholder(`eventBuddy-collection.webp`),
    },
    {
      href: `/assets/eventBuddy/eventBuddy-iPhone1.webp`,
      figcaption: "EventBuddy auf dem iPhone",
      alt: "eventBuddy app",
      hash: getPlaceholder(`eventBuddy-iPhone1.webp`),
    },
    {
      href: `/assets/eventBuddy/eventBuddy-iPhone2.webp`,
      figcaption: "Events page",
      alt: "eventBuddy app",
      hash: getPlaceholder(`eventBuddy-iPhone2.webp`),
    },
    {
      href: `/assets/eventBuddy/eventBuddy-iPhone3.webp`,
      figcaption: "Event details page",
      alt: "eventBuddy app",
      hash: getPlaceholder(`eventBuddy-iPhone3.webp`),
    },
    {
      href: `/assets/eventBuddy/eventBuddy-iPad1.webp`,
      figcaption: "Create new Event",
      alt: "eventBuddy app",
      hash: getPlaceholder(`eventBuddy-iPad1.webp`),
    },
    {
      href: `/assets/eventBuddy/eventBuddy-iPad2.webp`,
      figcaption: "Text Editor",
      alt: "eventBuddy app",
      hash: getPlaceholder(`eventBuddy-iPad2.webp`),
    },
    {
      href: `/assets/eventBuddy/eventBuddy-iPad3.webp`,
      figcaption: "Ein Event buchen",
      alt: "eventBuddy app",
      hash: getPlaceholder(`eventBuddy-iPad3.webp`),
    },
    {
      href: `/assets/eventBuddy/eventBuddy-iPad5.webp`,
      figcaption: "Dashboard Übersicht",
      alt: "eventBuddy app",
      hash: getPlaceholder(`eventBuddy-iPad5.webp`),
    },
    {
      href: `/assets/eventBuddy/eventBuddy-macBook1.webp`,
      figcaption: "Organizations page",
      alt: "eventBuddy app",
      hash: getPlaceholder(`eventBuddy-macBook1.webp`),
    },
    {
      href: `/assets/eventBuddy/eventBuddy-macBook2.webp`,
      figcaption: "Event Management",
      alt: "eventBuddy app",
      hash: getPlaceholder(`eventBuddy-macBook2.webp`),
    },
    {
      href: `/assets/eventBuddy/eventBuddy-macBook3.webp`,
      figcaption: "Profile page",
      alt: "eventBuddy app",
      hash: getPlaceholder(`eventBuddy-macBook3.webp`),
    },
  ],
  techStack: [
    { icon: FaJava, text: "Java" },
    { icon: BiLogoSpringBoot, text: "Spring Boot" },
    { icon: FaReact, text: "React", link: "https://react.dev/" },
    {
      icon: SiShadcnui,
      text: "Shadcn/ui",
      link: "https://ui.shadcn.com/",
    },
    {
      icon: RiTailwindCssFill,
      text: "Tailwind",
      link: "https://tailwindcss.com/",
    },
    {
      icon: FaDocker,
      text: "Docker",
      link: "https://www.docker.com/",
    },
    {
      icon: RiJavascriptFill,
      text: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
  ],
};

export default eventBuddy;
