import React from "react";

const CustomHr = () => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="w-full bg-[#6C6969] h-[2px]"></div>
      <div className="absolute w-[50px] h-[50px] bg-black rounded-full border-2 border-[#6C6969]"></div>
    </div>
  );
};

export default CustomHr;
