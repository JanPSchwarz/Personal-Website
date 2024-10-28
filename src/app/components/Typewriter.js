import { twMerge } from "tailwind-merge";
import { motion, useAnimate, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function Typewriter({ tag, text, className, delay }) {
  const Tag = motion[tag] || motion.div;

  const [parentAnimation, setParentAnimation] = useState(false);

  const sentenceVariants = {
    hidden: {},
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0 } },
  };

  const controls = useAnimation();

  useEffect(() => {
    if (parentAnimation) controls.start("show");
  }, [parentAnimation, controls]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay, duration: 0 }}
      onAnimationComplete={() => setParentAnimation(true)}
      className={`inline`}
    >
      <Tag
        className={twMerge(``, className)}
        variants={sentenceVariants}
        initial="hidden"
        animate={controls}
      >
        {text.split("").map((char, index) => (
          <motion.span className={``} key={index} variants={letterVariants}>
            {char}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  );
}
