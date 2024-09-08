import { industriesAndVert } from "@/lib/data";
import Image from "next/image";
import React from "react";

type ServerCardProps = (typeof industriesAndVert)[number];

const ServerCard = ({ name, src }: ServerCardProps) => {
  return (
    <div className=" p-[0.8px]  bg-gradient-to-b from-gray-700 to-transparent rounded-lg md:last:col-span-1">
      <div className="flex-1 h-full bg-black gap-3 flex flex-col items-center rounded-lg">
        <div className="py-3 flex-1 w-full flex items-center justify-center opacity-65">
          <Image src={src} width={80} height={50} alt={name} />
        </div>
        <p className="py-2 px-5 text-center text-base sm:text-lg opacity-65">
          {name}
        </p>
      </div>
    </div>
  );
};

export default ServerCard;
