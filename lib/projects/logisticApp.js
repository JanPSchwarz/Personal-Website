import getPlaceholder from "../../utils/getPlaceholder";
import { SiShadcnui } from "react-icons/si";
import { FaDocker,FaJava,FaReact } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { RiJavascriptFill,RiTailwindCssFill } from "react-icons/ri";

const logisticApp = {
  heading: `Logistic App`,
  github: "https://github.com/StefanNeuberger/team-project",
  description: (
    <>
      Hierbei handelt es sich um eine Lagerverwaltungs-App welche im Rahmen
      eines Team-Projekts bei der Java Weiterbildung bei NeueFische Gmbh
      erstellt wurde.
      <br />
      <br />
      Die App bietet Funktionen zur Verwaltung von Lagern, Inventar und
      Bestellungen. Benutzer können Lager hinzufügen, Artikel verwalten,
      Bestellungen aufgeben und den Status von Bestellungen aktualisieren. Es
      gibt auch eine Kartenintegration mit Open Street Maps, um die Standorte
      der Lager anzuzeigen.
      <br />
      <br />
      Das Backend basiert auf Java 21 und Spring Boot und stellt eine RESTful
      API bereit, die mit einer OpenAPI-Spezifikation dokumentiert ist. Als
      Datenbank wird MongoDB verwendet, was eine flexible und skalierbare
      Datenverwaltung ermöglicht.
      <br />
      <br />
      Das Frontend wurde mit React, TypeScript und der Shadcn
      Komponenten-Library entwickelt. Ein besonderes Merkmal ist die
      automatische Generierung typsicherer API-Clients aus der
      OpenAPI-Spezifikation mittels Orval, was durchgängige Type-Safety vom
      Backend bis zum Frontend gewährleistet.
      <br />
      <br />
      Die gesamte Anwendung ist vollständig containerisiert. Frontend, Backend
      und Datenbank werden über Docker Compose orchestriert, was eine
      konsistente Entwicklungs- und Produktionsumgebung ermöglicht. Multi-Stage
      Builds und automatisierte Scripts optimieren den Deployment-Prozess.
      <br />
      <br />
      Das Projekt zeigt Kompetenz in moderner Full-Stack-Entwicklung,
      containerisierten Anwendungen und DevOps-Praktiken.
      <br />
      <br />
      <a href="https://github.com/StefanNeuberger/team-project" target="_blank">
        <strong>Repo!</strong>
      </a>
    </>
  ),
  images: [
    {
      href: `/assets/Logistic-App/logistic-collection.webp`,
      figcaption: "responsive designed",
      alt: "Logistic-App app",
      hash: getPlaceholder(`logistic-collection.webp`),
    },
    {
      href: `/assets/Logistic-App/logistic-iPhone1.webp`,
      figcaption: "Logistic-App auf dem iPhone",
      alt: "Logistic-App app",
      hash: getPlaceholder(`logistic-iPhone1.webp`),
    },
    {
      href: `/assets/Logistic-App/logistic-iPhone2.webp`,
      figcaption: "Mobile Menu",
      alt: "Logistic-App app",
      hash: getPlaceholder(`logistic-iPhone2.webp`),
    },
    {
      href: `/assets/Logistic-App/logistic-iPad1.webp`,
      figcaption: "Items page",
      alt: "Logistic-App app",
      hash: getPlaceholder(`logistic-iPad1.webp`),
    },
    {
      href: `/assets/Logistic-App/logistic-iPad5.webp`,
      figcaption: "Item details",
      alt: "Logistic-App app",
      hash: getPlaceholder(`logistic-iPad5.webp`),
    },
    {
      href: `/assets/Logistic-App/logistic-iPad2.webp`,
      figcaption: "Warehouse Kapazitäten",
      alt: "Logistic-App app",
      hash: getPlaceholder(`logistic-iPad2.webp`),
    },
    {
      href: `/assets/Logistic-App/logistic-iPad3.webp`,
      figcaption: "Charts und Statistiken",
      alt: "Logistic-App app",
      hash: getPlaceholder(`logistic-iPad3.webp`),
    },
    {
      href: `/assets/Logistic-App/logistic-iPad4.webp`,
      figcaption: "Open Street Maps integration",
      alt: "Logistic-App app",
      hash: getPlaceholder(`logistic-iPad4.webp`),
    },
    {
      href: `/assets/Logistic-App/logistic-MacBook1.webp`,
      figcaption: "Lager übersicht",
      alt: "Logistic-App app",
      hash: getPlaceholder(`logistic-MacBook1.webp`),
    },
    {
      href: `/assets/Logistic-App/logistic-MacBook2.webp`,
      figcaption: "Neues Lager erstellen",
      alt: "Logistic-App app",
      hash: getPlaceholder(`logistic-MacBook2.webp`),
    },
    {
      href: `/assets/Logistic-App/logistic-MacBook3.webp`,
      figcaption: "Inventar übersicht",
      alt: "Logistic-App app",
      hash: getPlaceholder(`logistic-MacBook3.webp`),
    },
    {
      href: `/assets/Logistic-App/logistic-MacBook4.webp`,
      figcaption: "Update Bestell-Status",
      alt: "Logistic-App app",
      hash: getPlaceholder(`logistic-MacBook4.webp`),
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

export default logisticApp;
