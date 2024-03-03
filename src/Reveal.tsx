import React from "react";
import { motion } from "framer-motion";

const animationVariants = {
  animate: { inset: "0 0 0 100%" },
};

const animationVariants2 = {
  animate: { y: 0 },
};

interface RevealProps {
  children: any;
  type?: string;
}

const Reveal = ({ children, type = "default" }: RevealProps) => {
  return (
    <div className="relative">
      <motion.div
        className=""
        variants={animationVariants2}
        viewport={{ once: true }}
        whileInView="animate"
        initial={{
          y: "100px",
        }}
      >
        {children}
      </motion.div>
      {type === "reveal" && (
        <motion.div
          variants={animationVariants}
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.3,
          }}
          className="absolute bg-red-200 inset-0"
        ></motion.div>
      )}
    </div>
  );
};

export default Reveal;
