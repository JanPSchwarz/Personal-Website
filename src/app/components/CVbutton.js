import { twMerge } from "tailwind-merge";

export default function CVbutton({ className }) {
  return (
    <div
      className={twMerge(
        `bg-colorPreset6 flex aspect-square size-16 cursor-pointer items-center justify-center rounded-full hover:scale-[110%] hover:bg-colorPreset2 active:scale-90 active:bg-colorPreset2`,
        className,
      )}
    >
      <a
        href="/assets/Lebenslauf Jan Schwarz.pdf"
        target="_blank"
        className={`flex items-center justify-center rounded-full font-bold text-colorPreset1 md:text-3xl`}
      >
        CV
      </a>
    </div>
  );
}
