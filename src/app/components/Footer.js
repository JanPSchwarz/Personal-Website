import { FaRegCopyright } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className={
        "relative mt-12 flex items-center justify-center gap-2 border-t py-4"
      }
    >
      <a
        aria-label={"github link"}
        href="https://github.com/JanPSchwarz/Personal-Website"
        target="_blank"
        className={"absolute left-8"}
      >
        <FaGithub size={32} />
      </a>
      <FaRegCopyright size={16} />
      <p className={"text-xs md:text-sm"}>Jan&#39;s Website 2026</p>
    </footer>
  );
}
