import { twMerge } from "tailwind-merge";

export default function CVbutton({ className }) {
  return (
    <div>
      <a
        href="/assets/Lebenslauf Jan Schwarz.pdf"
        target="_blank"
        className={twMerge(
          `bg-colorPreset6 flex aspect-square w-8 cursor-pointer items-center justify-center rounded text-lg font-bold text-colorPreset1 hover:scale-[110%] hover:bg-colorPreset2 active:scale-90 md:text-2xl`,
          className,
        )}
      >
        CV
      </a>
    </div>
  );
}
