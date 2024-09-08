import { footerlinks, socials } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuInstagram } from "react-icons/lu";
import { LuFacebook } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="py-4 border-t-2 border-t-[#6C6969] lg:rounded-t-[125px] md:py-10 lg:pt-20 bg-black">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 place-items-start px-4 gap-y-5 text-[#f1f7feb5] lg:max-w-[80rem] lg:mx-auto">
        <div className="w-full col-span-2 grid grid-cols-2 sm:grid-cols-1 sm:col-span-1 sm:gap-3 md:col-span-2 lg:col-span-2">
          <div className="w-full ">
            <p className="text-sm">40 Bacon Street, Hindmarsh,</p>
            <p className="text-sm">South Australia 5007</p>
          </div>
          {/* <div className="flex items-center gap-2 w-full h-full">
            {socials.map((item, index) => (
              <React.Fragment key={index}>
                <a href={item.link}>
                  <div className="bg-gradient-to-b from-[#6C6969] to-black w-8 h-8 p-[0.8px] rounded-full">
                    <div className="bg-black h-full w-full rounded-full flex items-center justify-center">
                      <item.icon />
                    </div>
                  </div>
                </a>
              </React.Fragment>
            ))}
          </div> */}
          <div className="flex flex-col md:flex-row md:gap-x-1 md:items-center">
            <p>Powered by</p>
            <Image
              src={"/omnilogo.svg"}
              width={140}
              height={150}
              alt="Temi Robot"
            />
          </div>
        </div>
        <div className="w-full col-span-2 gap-2 grid grid-cols-2 sm:col-span-2 sm:grid-cols-2 sm:gap-3 md:grid-cols-2 md:col-span-2 md:gap-5 lg:flex lg:col-span-2">
          {footerlinks.map((item, index) => (
            <React.Fragment key={index}>
              <div className="text-sm w-full">
                <ul className="flex flex-col gap-2 px-2">
                  <li className="text-base font-medium text-white">
                    {item.setTitle}
                  </li>
                  {item.setItems.map((i, index) => (
                    <React.Fragment key={index}>
                      <li>
                        <a href={i.link}>{i.name}</a>
                      </li>
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <hr className="my-6 sm:border md:w-[80%] mx-auto" />
      <div className="py-5 text-sm sm: flex flex-col sm:flex-row sm:justify-around items-center gap-3 text-[#6C6969]">
        <p>Omni-Health 2024 all rights reserved</p>
        <p className="text-xs">
          Design & Dev{" "}
          <Link href={"https://codecrafters.bar/"} className="underline">
            CODECRAFTERS
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
