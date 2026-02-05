import Image from "next/image";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

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
  //* same as in Projects.js: applies blur when setted to false
  const [imageLoaded, setImageHasLoaded] = useState(false);

  const dialogRef = useRef();

  useEffect(() => {
    dialogRef.current.showModal();
    dialogRef.current.focus();
  }, []);

  function handleImageLoad() {
    setImageHasLoaded(true);
  }

  return (
    <dialog
      ref={dialogRef}
      onClick={() => {
        close();
      }}
      onKeyDown={(event) => {
        if (event.code === "Escape") {
          close();
        }
      }}
      className={`fixed inset-0 z-20 flex h-dvh w-screen flex-col items-center justify-center bg-transparent bg-opacity-90 backdrop:bg-opacity-90`}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className={`relative flex size-full select-none flex-col items-center justify-center gap-6 rounded-xl bg-slate-400 p-4`}
      >
        <AiOutlineFullscreenExit
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.code === "Enter") {
              close();
            }
          }}
          onClick={() => {
            close();
          }}
          className={`absolute right-5 top-5 z-10 size-8 cursor-pointer fill-gray-800 hover:scale-110 hover:fill-colorPreset6 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 active:scale-90 md:size-12`}
        />
        <div
          className={twMerge(
            `relative flex h-[80%] w-[100%] blur-md transition duration-0`,
            imageLoaded && `blur-none duration-150`,
          )}
        >
          <div
            className={`absolute left-0 z-10 h-full w-1/2 cursor-pointer`}
            onClick={() => {
              arrowClick("previous");
              setImageHasLoaded(false);
            }}
          />
          <Image
            key={href}
            src={href}
            alt={alt}
            placeholder="blur"
            blurDataURL={placeholder}
            onLoad={() => {
              handleImageLoad();
            }}
            fill
            className={`object-contain brightness-110`}
            style={{
              objectFit: "contain",
            }}
          />
          <div
            className={`absolute right-0 h-full w-1/2 cursor-pointer`}
            onClick={() => {
              arrowClick("next");
              setImageHasLoaded(false);
            }}
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
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.code === "Enter") {
                arrowClick("previous");
                setImageHasLoaded(false);
              }
            }}
            onClick={(event) => {
              event.stopPropagation();
              arrowClick("previous");
              setImageHasLoaded(false);
            }}
            className={`size-10 cursor-pointer fill-gray-800 hover:scale-110 hover:fill-colorPreset5 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 md:size-14`}
          />
          <FaRegArrowAltCircleLeft
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.code === "Enter") {
                arrowClick("next");
                setImageHasLoaded(false);
              }
            }}
            onClick={(event) => {
              event.stopPropagation();
              setImageHasLoaded(false);
              arrowClick("next");
            }}
            className={`size-10 rotate-180 cursor-pointer fill-gray-800 hover:scale-110 hover:fill-colorPreset5 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 md:size-14`}
          />
        </div>
      </div>
    </dialog>
  );
}
