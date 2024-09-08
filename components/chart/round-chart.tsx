"use client";

import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

type RoundChartProps = {
  percentage: number;
};

const RoundChart = ({ percentage }: RoundChartProps) => {
  const dotNumber = parseFloat((percentage / 100).toFixed(2));

  return (
    <div className="relative size-28 md:size-36">
      <motion.svg
        className="size-full"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate="visible"
      >
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="stroke-current text-gray-700"
          strokeWidth="3"
        ></circle>
        <g className="origin-center -rotate-90 transform">
          <motion.circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            className="stroke-current text-[#28C052]"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            transition={{ delay: 1 }}
            whileInView={{ pathLength: dotNumber }}
          ></motion.circle>
        </g>
      </motion.svg>
      <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <span className="text-center md:text-2xl font-bold text-[#28C052]">
          <CountUp start={0} end={percentage} delay={1} />%
        </span>
      </div>
    </div>
  );
};

export default RoundChart;
