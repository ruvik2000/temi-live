import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type ActionCardProps = {
  description: string;
  src: string;
  index: number;
};

const actionAnimate = {
  initial: {
    y: 10,
    opacity: 0,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5 * index,
    },
  }),
};

const ActionCard = ({ description, src, index }: ActionCardProps) => {
  return (
    <motion.div
      className="relative bg-gradient-to-b from-white/15 to-black w-[80%] h-[150px] md:w-[80%] md:h-[250px] rounded-2xl p-[2px]"
      variants={actionAnimate}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index + 0.1}
    >
      <div className="flex flex-col gap-5 md:gap-5 items-center justify-center overflow-hidden w-full h-full rounded-2xl px-5 bg-black">
        <div className="hidden md:block border border-white rounded-full p-2">
          <Image src={src} alt={description} width={50} height={50} />
        </div>
        <div className="md:hidden  border border-white rounded-full p-2">
          <Image src={src} alt={description} width={32} height={32} />
        </div>
        <div>
          <p className="text-center text-sm md:text-xl lg:text-2xl">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ActionCard;
