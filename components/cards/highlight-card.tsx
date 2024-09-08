import React from "react";
import { motion } from "framer-motion";

type HighlightCardProps = {
  title: string;
  description: string;
  index: number;
};

const highlightsAnimate = {
  initial: {
    x: 10,
    opacity: 0,
  },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: 0.5 * index,
    },
  }),
};

const HighlightCard = ({ title, description, index }: HighlightCardProps) => {
  return (
    <motion.div
      className="right-4 p-[0.8px] w-[250px] rounded-[59px] bg-gradient-to-br from-[#ffffff] via-[#8726b75b] to-[#28C052]"
      variants={highlightsAnimate}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index + 0.1}
    >
      <div className="relative overflow-hidden bg-black rounded-[59px] px-5 py-6 flex flex-col gap-3">
        <div className="absolute -z-1 w-36 h-20 top-0 left-0 bg-white rounded-full blur-[90px]"></div>
        <h4 className="text-center">{title}</h4>
        <p className="text-center text-xs text-[#EFF5FF]/[69.41%]">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default HighlightCard;
