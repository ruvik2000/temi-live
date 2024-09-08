import { specials } from "@/lib/data";
import Image from "next/image";
import React from "react";

type SpecialsCardProps = (typeof specials)[number];

const SpecialsCard = ({ imgUrl, title, description }: SpecialsCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <div className="w-20 h-20 p-[0.8px] bg-gradient-to-b from-[#28C052] via-black/50 to-[#2F538E] rounded-full">
        <div className="bg-black w-full h-full rounded-full flex items-center justify-center pr-1">
          <Image
            src={imgUrl}
            width={40}
            height={40}
            alt={title}
            className={`opacity-50 ${
              title == "Remote connectivity" && "rotate-45"
            }`}
          />
        </div>
      </div>
      <h3 className="text-lg md:text-xl lg:text-2xl">{title}</h3>
      <p className="text-center text-xs md:text-base text-[#EFF5FF]/[69.41%]">
        {description}
      </p>
    </div>
  );
};

export default SpecialsCard;
