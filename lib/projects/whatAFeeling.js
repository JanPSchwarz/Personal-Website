import getPlaceholder from "../../utils/getPlaceholder";
import { RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiMongodb, SiStyledcomponents } from "react-icons/si";

const whatAFeeling = {
  heading: `What A Feeling`,
  github: `https://github.com/janaRicarda/emotion-tracker`,
  description: (
    <>
      Ein emotionales Tracking-Tool, das Menschen dabei hilft, ihre Gefühle zu
      erfassen, zu analysieren und besser zu verstehen. Die App basiert auf dem
      Konzept der sieben Grundemotionen nach Paul Ekman und richtet sich sowohl
      an Personen in Verhaltenstherapie als auch an alle, die sich selbst besser
      kennenlernen möchten.
      <br />
      <br />
      Das Projekt wurde als Capstone-Projekt im Team entwickelt und bietet eine
      geführte Emotions-Protokollierung mit intuitiver Benutzerführung,
      ansprechende Datenvisualisierungen in Form von Charts und Listen sowie
      verschiedene individuelle Themes für eine persönliche Nutzererfahrung.
      Features wie Download-Optionen und eine Progressive Web App-Funktionalität
      runden die Anwendung ab.
      <br />
      <br />
      Technisch realisiert mit React, Next.js, MongoDB und styled-components,
      zeigt das Projekt moderne Web-Entwicklung mit Fokus auf
      Mobile-First-Design und benutzerfreundliche Interfaces.
      <br />
      <br />
      <a href="https://github.com/janaRicarda/emotion-tracker" target="_blank">
        <strong>Hier gehts zum Repo!</strong>
      </a>
    </>
  ),
  images: [
    {
      href: `/assets/What-A-Feeling/Emotion-App-Collection.png`,
      figcaption: "responsive designed",
      alt: "what a feeling app",
      hash: getPlaceholder(`Emotion-App-Collection.png`),
    },

    {
      href: `/assets/What-A-Feeling/iPhone-13-PRO-emotion-app-6.png`,
      figcaption: "Landing Page auf dem iPhone",
      alt: "what a feeling app",
      hash: getPlaceholder(`iPhone-13-PRO-emotion-app-6.png`),
    },
    {
      href: `/assets/What-A-Feeling/iPhone-13-PRO-emotion-app-4.png`,
      figcaption: "Login mit O-Auth",
      alt: "what a feeling app",
      hash: getPlaceholder(`iPhone-13-PRO-emotion-app-4.png`),
    },

    {
      href: `/assets/What-A-Feeling/iPhone-13-PRO-emotion-app-2.png`,
      figcaption: "Gespeicherte Einträge",
      alt: "what a feeling app",
      hash: getPlaceholder(`iPhone-13-PRO-emotion-app-2.png`),
    },
    {
      href: `/assets/What-A-Feeling/iPhone-13-PRO-emotion-app-1.png`,
      figcaption: "Detail Ansicht",
      alt: "what a feeling app",
      hash: getPlaceholder(`iPhone-13-PRO-emotion-app-1.png`),
    },
    {
      href: `/assets/What-A-Feeling/iPhone-13-PRO-emotion-app-5.png`,
      figcaption: "Download generierter PDF",
      alt: "what a feeling app",
      hash: getPlaceholder(`iPhone-13-PRO-emotion-app-5.png`),
    },
    {
      href: `/assets/What-A-Feeling/iPhone-13-PRO-emotion-app-3.png`,
      figcaption: "Dashboard mit Graphen",
      alt: "what a feeling app",
      hash: getPlaceholder(`iPhone-13-PRO-emotion-app-3.png`),
    },
    {
      href: `/assets/What-A-Feeling/iPad-Air-4-emotion-app-1.png`,
      figcaption: "User Bereich",
      alt: "what a feeling app",
      hash: getPlaceholder(`iPad-Air-4-emotion-app-1.png`),
    },
    {
      href: `/assets/What-A-Feeling/iPad-Air-4-emotion-app-2.png`,
      figcaption: "F.A.Q",
      alt: "what a feeling app",
      hash: getPlaceholder(`iPad-Air-4-emotion-app-2.png`),
    },
    {
      href: `/assets/What-A-Feeling/Macbook-Air-emotion-app-1.png`,
      figcaption: "Ein neuer Eintrag",
      alt: "what a feeling app",
      hash: getPlaceholder(`Macbook-Air-emotion-app-1.png`),
    },
    {
      href: `/assets/What-A-Feeling/Macbook-Air-emotion-app-2.png`,
      figcaption: "F.A.Q auf dem MacBook",
      alt: "what a feeling app",
      hash: getPlaceholder(`Macbook-Air-emotion-app-2.png`),
    },
  ],
  techStack: [
    { icon: RiNextjsFill, text: "NextJS", link: "https://nextjs.org/" },
    { icon: FaReact, text: "React", link: "https://react.dev/" },
    {
      icon: SiStyledcomponents,
      text: "St. Components",
      link: "https://styled-components.com/",
    },
    {
      icon: RiJavascriptFill,
      text: "JS",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      icon: SiMongodb,
      text: "mongoDB",
      link: "https://www.mongodb.com/de-de/lp/cloud/atlas/try4?utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_general_prosp-brand_gic-null_emea-de_ps-all_dv-all_eng_lead&utm_term=using%20mongodb&utm_medium=cpc_paid_search&utm_ad=p&utm_ad_campaign_id=1718986504&adgroup=150907559194&cq_cmp=1718986504&gad_source=1&gclid=Cj0KCQjw05i4BhDiARIsAB_2wfCyOCJmVfLx8HNiagUz6mMCioDNq8XXK7OhKxpem1cgAuqIC864MIwaAuMmEALw_wcB",
    },
  ],
};

export default whatAFeeling;
