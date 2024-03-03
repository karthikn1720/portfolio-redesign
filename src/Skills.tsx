import React from "react";
import { motion } from "framer-motion";
interface SkillProps {
  items: {
    icon: any;
    level: number;
    name: string;
  }[];
}

const animationVariants = {
  animate: ({ index, level }: any) => ({
    delay: 0.5 * index,
    width: `${level * 10}%`,
  }),
};

const Skills = ({ items }: SkillProps) => {
  return (
    <div className="flex flex-row gap-20">
      <div className="w-min">
        {items.map(({ icon, name, level }) => {
          return (
            <div className="flex w-full items-center gap-3 h-14">
              <img src={icon} alt="" className=" w-7 h-7" />
              <h5 className=" text-nowrap">{name}</h5>
            </div>
          );
        })}
      </div>
      <div className="w-full">
        {items.map(({ icon, name, level }, index) => {
          return (
            <div className="flex w-full items-center gap-3 h-14">
              <div className="bg-gray-100 h-3 w-full rounded-lg overflow-hidden">
                <motion.div
                  // animate={{
                  //   width: `${level * 10}%`,
                  // }}
                  // initial="initial"
                  variants={animationVariants}
                  transition={{
                    duration: 0.5,
                    type: "tween",
                    // bounce: 4,
                    // repeat: Infinity,
                    // repeatDelay: 5,
                  }}
                  viewport={{
                    once: true,
                  }}
                  whileInView="animate"
                  style={{ width: 0 }}
                  custom={{ index, level }}
                  className={`bg-green-400 h-3 rounded-md`}
                ></motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
