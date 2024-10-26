import { motion } from "framer-motion";
import { RxCookie } from "react-icons/rx";

export default function CookieBanner({ buttonFunction }) {
  return (
    <motion.div
      initial={{ y: "100%", translateX: "-50%" }}
      animate={{ y: 0, translateX: "-50%" }}
      transition={{ delay: 7, duration: 0.4 }}
      className={`fixed bottom-0 left-1/2 z-20 flex w-[calc(100vw-10%)] max-w-[500px] flex-col gap-2 rounded-md border-2 border-colorPreset5 bg-colorPreset1 bg-opacity-60 p-4 backdrop-blur-sm`}
    >
      <div
        className={`flex items-center justify-center gap-2 rounded-md bg-colorPreset2 text-black`}
      >
        <h2>Cookies</h2>
        <RxCookie />
      </div>
      <div className={`flex justify-between gap-4 text-sm`}>
        <p className={`rounded-md bg-colorPreset2 p-1 text-black`}>
          Diese Seite nutzt nur technisch notwendige Cookies!
        </p>
        <button
          className={`self-end rounded-md bg-colorPreset6 p-3`}
          onClick={() => buttonFunction()}
        >
          Verstanden
        </button>
      </div>
    </motion.div>
  );
}
