"use client";

import { useCases } from "@/lib/data";
import React, { useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";

type CustomVideoCardProps = (typeof useCases)[number];

const CustomVideoCard = ({ videoUrl, title, points }: CustomVideoCardProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-2 flex flex-col items-start">
      <video controls width="100%" className="rounded-lg w-[500px] h-[300px]">
        <source src={videoUrl} type="video/mp4" />
      </video>
      <h3 className="text-xl md:text-2xl flex items-center gap-2">
        {open ? (
          <button
            onClick={() => setOpen(false)}
            className="flex items-center justify-center"
          >
            {title}
            <LuMinus />
          </button>
        ) : (
          <button
            onClick={() => setOpen(true)}
            className="flex items-center justify-center"
          >
            {title}
            <LuPlus />
          </button>
        )}
      </h3>
      {open && (
        <ul className="w-full text-[#EFF5FF]/[69.41%] text-xs md:text-sm space-y-2">
          {points.map((point, index) => (
            <li key={index} className="bg-gray-400/25 px-2 py-2">
              {point}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomVideoCard;
