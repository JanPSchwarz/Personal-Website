import { twMerge } from "tailwind-merge";

export default function CVbutton({ className }) {
  return (
    <div>
      <a
        href="/assets/Lebenslauf Jan Schwarz.pdf"
        target="_blank"
        className={twMerge(
          `bg-colorPreset6 flex aspect-square w-8 items-center justify-center rounded font-bold text-colorPreset1`,
          className,
        )}
      >
        CV
      </a>
    </div>
  );
}
