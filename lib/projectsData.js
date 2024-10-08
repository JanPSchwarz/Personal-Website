import {
  RiNextjsFill,
  RiTailwindCssFill,
  RiJavascriptFill,
} from "react-icons/ri";
import { SiStyledcomponents, SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";

export const projectsData = [
  {
    heading: `Memory App`,
    url: `https://memory-phi-six.vercel.app/`,
    github: `https://github.com/JanPSchwarz/Memory`,
    description: (
      <>
        Ein{" "}
        <a href="https://www.frontendmentor.io/" target="_blank">
          Front-End Mentor
        </a>{" "}
        Projekt um Memory als single oder multiplayer mit bis zu 4 Spielern zu
        spielen. Es gibt die Wahl zwischen Zahlen oder zufälligen Icons auf
        einem 4x4 oder 6x6 Spielfeld.{" "}
        <a href="https://memory-phi-six.vercel.app/" target="_blank">
          <strong>Probier es aus!</strong>
        </a>
      </>
    ),
    images: [
      {
        href: `/assets/Memory-App/Memory-Collection.png`,
        figcaption: "responsive designed",
        alt: "memory app",
      },
      {
        href: `/assets/Memory-App/iPhone-13-PRO-memory-6.png`,
        figcaption: "Die Spieloptionen",
        alt: "memory app",
      },
      {
        href: `/assets/Memory-App/iPhone-13-PRO-memory-1.png`,
        figcaption: "Einzelspieler",
        alt: "memory app",
      },
      {
        href: `/assets/Memory-App/iPhone-13-PRO-memory-2.png`,
        figcaption: "Zeit und Züge sind gezählt",
        alt: "memory app",
      },
      {
        href: `/assets/Memory-App/iPhone-13-PRO-memory-3.png`,
        figcaption: "Sicherheitsabfragen",
        alt: "memory app",
      },
      {
        href: `/assets/Memory-App/iPad-Air-4-memory-1.png`,
        figcaption: "Random Icons",
        alt: "memory app",
      },
      {
        href: `/assets/Memory-App/iPad-Air-4-memory-2.png`,
        figcaption: "Oder mit Zahlen",
        alt: "memory app",
      },
      {
        href: `/assets/Memory-App/Macbook-Air-memory-2.png`,
        figcaption: "Multiplayer",
        alt: "memory app",
      },
      {
        href: `/assets/Memory-App/Macbook-Air-memory-1.png`,
        figcaption: "Spieler 1 hat gewonnen",
        alt: "memory app",
      },
    ],
    techStack: [
      { icon: RiNextjsFill, text: "NextJS", link: "" },
      { icon: FaReact, text: "React", link: "" },
      { icon: RiTailwindCssFill, text: "Tailwind", link: "" },
      { icon: RiJavascriptFill, text: "JavaScript", link: "" },
    ],
  },
  {
    heading: `Space App`,
    url: `https://space-website-gamma.vercel.app/`,
    github: `https://github.com/JanPSchwarz/Space-Website`,
    description: (
      <>
        Eine Multi-Page Website zur anschaulichen Präsentation von Personen,
        Planeten und Technologien. Jede Unterseite hat dabei ihre eigene
        abwechslungsreiche Navigation und Layout.{" "}
        <a href="https://memory-phi-six.vercel.app/" target="_blank">
          <strong>Schau es dir an!</strong>
        </a>
      </>
    ),
    images: [
      {
        href: `/assets/Space-App/Space-App-Collection.png`,
        figcaption: "responsive designed",
        alt: "space app",
      },

      {
        href: `/assets/Space-App/iPhone-13-PRO-space-website-1.png`,
        figcaption: "Landing Page auf dem iPhone",
        alt: "space app",
      },

      {
        href: `/assets/Space-App/iPhone-13-PRO-space-website-2.png`,
        figcaption: "Planet auf Knopfdruck oder Swipe",
        alt: "space app",
      },
      {
        href: `/assets/Space-App/iPad-Air-4-space-app-2.png`,
        figcaption: "Ansicht auf dem iPad",
        alt: "space app",
      },
      {
        href: `/assets/Space-App/iPad-Air-4-space-app-1.png`,
        figcaption: "Crew auf dem iPad",
        alt: "space app",
      },
      {
        href: `/assets/Space-App/Macbook-Air-space-app-3.png`,
        figcaption: "Crew auf dem MacBook",
        alt: "space app",
      },
      {
        href: `/assets/Space-App/Macbook-Air-space-app-2.png`,
        figcaption: "Technologien",
        alt: "space app",
      },
      {
        href: `/assets/Space-App/iPhone-13-PRO-space-website-3.png`,
        figcaption: "Technologien auf dem iPhone",
        alt: "space app",
      },
    ],
    techStack: [
      { icon: RiNextjsFill, text: "NextJS", link: "" },
      { icon: FaReact, text: "React", link: "" },
      { icon: SiStyledcomponents, text: "St. Components", link: "" },
      { icon: RiJavascriptFill, text: "JavaScript", link: "" },
    ],
  },
  {
    heading: `What A Feeling`,
    url: `https://what-a-feeling.vercel.app/`,
    github: `https://github.com/janaRicarda/emotion-tracker`,
    description: (
      <>
        Ein Emotion Tracker mit viele Funktionen: User-Login,
        Datenbank-Anbindung mit allen CRUD-Operatoren, Veranschaulichung über
        Graphen, F.A.Q, Custom Theme.{" "}
        <a href="https://cat-website-next.vercel.app/" target="_blank">
          <strong>Schau es dir an!</strong>
        </a>
      </>
    ),
    images: [
      {
        href: `/assets/What-A-Feeling/Emotion-App-Collection.png`,
        figcaption: "responsive designed",
        alt: "what a feeling app",
      },

      {
        href: `/assets/What-A-Feeling/iPhone-13-PRO-emotion-app-6.png`,
        figcaption: "Landing Page auf dem iPhone",
        alt: "what a feeling app",
      },
      {
        href: `/assets/What-A-Feeling/iPhone-13-PRO-emotion-app-4.png`,
        figcaption: "Login mit O-Auth",
        alt: "what a feeling app",
      },

      {
        href: `/assets/What-A-Feeling/iPhone-13-PRO-emotion-app-2.png`,
        figcaption: "Gespeicherte Einträge",
        alt: "what a feeling app",
      },
      {
        href: `/assets/What-A-Feeling/iPhone-13-PRO-emotion-app-1.png`,
        figcaption: "Detail Ansicht",
        alt: "what a feeling app",
      },
      {
        href: `/assets/What-A-Feeling/iPhone-13-PRO-emotion-app-5.png`,
        figcaption: "Download generierter PDF",
        alt: "what a feeling app",
      },
      {
        href: `/assets/What-A-Feeling/iPhone-13-PRO-emotion-app-3.png`,
        figcaption: "Dashboard mit Graphen",
        alt: "what a feeling app",
      },
      {
        href: `/assets/What-A-Feeling/iPad-Air-4-emotion-app-1.png`,
        figcaption: "User Bereich",
        alt: "what a feeling app",
      },
      {
        href: `/assets/What-A-Feeling/iPad-Air-4-emotion-app-2.png`,
        figcaption: "F.A.Q",
        alt: "what a feeling app",
      },
      {
        href: `/assets/What-A-Feeling/Macbook-Air-emotion-app-1.png`,
        figcaption: "Ein neuer Eintrag",
        alt: "what a feeling app",
      },
      {
        href: `/assets/What-A-Feeling/Macbook-Air-emotion-app-2.png`,
        figcaption: "F.A.Q auf dem MacBook",
        alt: "what a feeling app",
      },
    ],
    techStack: [
      { icon: RiNextjsFill, text: "NextJS", link: "" },
      { icon: FaReact, text: "React", link: "" },
      { icon: SiStyledcomponents, text: "St. Components", link: "" },
      { icon: RiJavascriptFill, text: "JS", link: "" },
      { icon: SiMongodb, text: "mongoDB", link: "" },
    ],
  },
  {
    heading: `Cat Generator`,
    url: `https://cat-website-next.vercel.app/`,
    github: `https://github.com/JanPSchwarz/Cat-Website-Next`,
    description: (
      <>
        Während meines Webentwicklung-Kurses bei{" "}
        <a href="https://www.neuefische.de/" target="_blank">
          neue Fische
        </a>{" "}
        nebenbei aus Spaß entwickelt. Vielleicht nicht nach best practices aber
        eine gute Übung. Alle Daten von einer{" "}
        <a
          href="https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=FJkYOq9tW"
          target="_blank"
        >
          freien API.
        </a>
        <a href="https://what-a-feeling.vercel.app/`" target="_blank">
          <strong> Schau es dir an!</strong>
        </a>
      </>
    ),
    images: [
      {
        href: `/assets/Cat-Generator/Cat-Website-Collection.png`,
        figcaption: "responsive designed",
        alt: "what a feeling app",
      },

      {
        href: `/assets/Cat-Generator/iPhone-13-PRO-cat-website-3.png`,
        figcaption: "Landing Page auf dem iPhone",
        alt: "what a feeling app",
      },
      {
        href: `/assets/Cat-Generator/iPhone-13-PRO-cat-website-1.png`,
        figcaption: "Zufällige Katzenbilder",
        alt: "what a feeling app",
      },

      {
        href: `/assets/Cat-Generator/iPhone-13-PRO-cat-website-2.png`,
        figcaption: "Und Fakten",
        alt: "what a feeling app",
      },
      {
        href: `/assets/Cat-Generator/iPad-Air-4-cat-website-1.png`,
        figcaption: "Ansicht auf dem iPad",
        alt: "what a feeling app",
      },
      {
        href: `/assets/Cat-Generator/iPad-Air-4-cat-website-2.png`,
        figcaption: "Mit Like Funktion",
        alt: "what a feeling app",
      },
      {
        href: `/assets/Cat-Generator/iPad-Air-4-cat-website-3.png`,
        figcaption: "Bis zu 100 Katzen mit einer Anfrage",
        alt: "what a feeling app",
      },
      {
        href: `/assets/Cat-Generator/Macbook-Air-cat-website-1.png`,
        figcaption: "Auf dem MacBook",
        alt: "what a feeling app",
      },
      {
        href: `/assets/Cat-Generator/Macbook-Air-cat-website-2.png`,
        figcaption: "Auf dem MacBook",
        alt: "what a feeling app",
      },
    ],
    techStack: [
      { icon: RiNextjsFill, text: "NextJS", link: "" },
      { icon: FaReact, text: "React", link: "" },
      { icon: SiStyledcomponents, text: "St. Components", link: "" },
      { icon: RiJavascriptFill, text: "JS", link: "" },
    ],
  },
];
