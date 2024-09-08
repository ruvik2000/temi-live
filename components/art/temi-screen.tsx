"use client";

import React from "react";
import { LuArrowDown } from "react-icons/lu";
import { motion } from "framer-motion";
import Image from "next/image";

type TemiScreenProps = {
  title: string;
  description: string;
  img: string;
};

const TemiScreen = ({ title, description, img }: TemiScreenProps) => {
  return (
    <motion.div
      className="mx-auto w-[90%] h-[80%] sm:w-[80%] sm:h-[70%] md:w-[90%] md:h-[85%] lg:w-[85%] xl:w-[75%] 2xl:w-[60%] 2xl:h-[90%] bg-gradient-to-b from-white to-black rounded-[23px] p-[0.8px]"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-black  w-full h-full rounded-[23px]">
        <div className="w-[90%] mx-auto flex items-center justify-center py-2 gap-x-5">
          <div className="w-4 h-4 md:w-6 md:h-6 bg-gray-900 rounded-full p-[0.5px]">
            <div className="w-full h-full bg-transparent rounded-full"></div>
          </div>
          <div className="flex gap-x-1">
            <div className="w-3 h-3 md:w-5 md:h-5 bg-gray-900 rounded-full"></div>
            <div className="w-3 h-3 md:w-5 md:h-5 bg-gray-900 rounded-full"></div>
          </div>
        </div>
        <motion.div
          className="relative mt-1 px-4 xl:px-14 rounded-xl flex flex-col items-center justify-start text-center gap-y-3 sm:gap-y-4 2xl:gap-y-9 mx-auto w-[90%] h-[70%] 2xl:h-[80%] border-[0.8px] border-white/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <img
            src={img}
            alt="Healthcare"
            width={0}
            height={0}
            className="absolute w-full h-full rounded-xl object-cover brightness-50 opacity-70"
          />
          <motion.h1
            className="z-20 text-xl sm:text-2xl md:text-3xl xl:text-4xl mt-3 sm:mt-10 md:mt-14"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="z-20 text-xs md:text-base xl:text-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            {description}
          </motion.p>
          <div className="absolute left-0 bottom-3 w-full flex items-center justify-center">
            <div className="border border-gray-200 p-1 sm:p-2 rounded-full animate-bounce bg-gray-900">
              <LuArrowDown className="text-xs sm:text-base md:text-lg text-gray-400" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TemiScreen;
