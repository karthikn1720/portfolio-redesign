import { motion } from "framer-motion";

interface RevealOneByOneProps {
  children: string;
}

const animationVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const RevealOneByOne = ({ children }: RevealOneByOneProps) => {
  return (
    <motion.span
      initial="hidden"
      className=""
      whileInView="visible"
      transition={{
        staggerChildren: 0.03,
      }}
      viewport={{
        once: true,
      }}
    >
      {children.split(" ").map((text) => {
        return (
          <motion.span className="" variants={animationVariants}>
            {text}{" "}
          </motion.span>
        );
      })}
    </motion.span>
  );
};

export default RevealOneByOne;
