import Image from "next/image";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { AiOutlineFullscreenExit } from "react-icons/ai";

export default function FullScreenImage({
  href,
  figcaption,
  alt,
  arrowClick,
  close,
}) {
  return (
    <div
      onClick={() => {
        close();
      }}
      className={`fixed inset-0 z-20 flex h-screen w-screen flex-col items-center justify-center bg-gray-700 bg-opacity-90`}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className={`relative flex size-[90%] flex-col items-center justify-center gap-6 rounded-xl bg-colorPreset4 p-4`}
      >
        <AiOutlineFullscreenExit
          onClick={() => {
            close();
          }}
          className={`absolute right-5 top-5 z-10 size-8 fill-gray-800`}
        />
        <div className={`relative flex h-[80%] w-[100%]`}>
          <Image src={href} alt={alt} fill className={`object-contain`} />
        </div>
        <p className={`text-black`}>{figcaption}</p>
        <div className={`flex w-full justify-evenly`}>
          <FaRegArrowAltCircleLeft
            onClick={(event) => {
              event.stopPropagation();
              arrowClick("previous");
            }}
            className={`size-10 fill-gray-800`}
          />
          <FaRegArrowAltCircleLeft
            onClick={(event) => {
              event.stopPropagation();
              arrowClick("next");
            }}
            className={`size-10 rotate-180 fill-gray-800`}
          />
        </div>
      </div>
    </div>
  );
}
