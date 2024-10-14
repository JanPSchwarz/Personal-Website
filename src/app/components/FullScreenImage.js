import Image from "next/image";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import { useEffect, useState } from "react";

export default function FullScreenImage({
  href,
  placeholder,
  figcaption,
  alt,
  arrowClick,
  close,
  images,
  imageIndex,
}) {
  const [imageLoaded, setImageHasLoaded] = useState(false);

  useEffect(() => {
    setImageHasLoaded(false);
  }, [href]);

  return (
    <div
      onClick={() => {
        close();
      }}
      className={`fixed inset-0 z-20 flex h-dvh w-screen flex-col items-center justify-center bg-gray-700 bg-opacity-90`}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className={`relative flex size-[90%] select-none flex-col items-center justify-center gap-6 rounded-xl bg-colorPreset4 p-4`}
      >
        <AiOutlineFullscreenExit
          onClick={() => {
            close();
          }}
          className={`hover:fill-colorPreset6 absolute right-5 top-5 z-10 size-8 cursor-pointer fill-gray-800 hover:scale-110 active:scale-90 md:size-12`}
        />
        <div className={`relative flex h-[80%] w-[100%]`}>
          <Image
            key={href}
            src={href}
            alt={alt}
            placeholder={placeholder}
            onLoad={() => {
              setImageHasLoaded(true);
            }}
            fill
            className={`object-contain ${!imageLoaded && `blur-sm`} transition`}
            style={{ objectFit: "contain" }}
          />
        </div>
        <p
          className={`relative w-full max-w-[800px] select-none text-center text-black md:text-xl`}
        >
          <span
            className={`absolute -top-5 left-0 font-extralight italic`}
          >{`${imageIndex + 1}/${images.length}`}</span>
          {figcaption}
        </p>
        <div
          className={`flex w-full justify-evenly lg:absolute lg:w-[90%] lg:justify-between`}
        >
          <FaRegArrowAltCircleLeft
            onClick={(event) => {
              event.stopPropagation();
              arrowClick("previous");
            }}
            className={`hover:fill-colorPreset5 size-10 cursor-pointer fill-gray-800 hover:scale-110 md:size-14`}
          />
          <FaRegArrowAltCircleLeft
            onClick={(event) => {
              event.stopPropagation();
              arrowClick("next");
            }}
            className={`hover:fill-colorPreset5 size-10 rotate-180 cursor-pointer fill-gray-800 hover:scale-110 md:size-14`}
          />
        </div>
      </div>
    </div>
  );
}
