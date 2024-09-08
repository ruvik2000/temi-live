"use client";

import { montserrat } from "@/app/fonts";
import { navLinks } from "@/lib/data";
import { useEffect, useState } from "react";
import { LuAlignJustify, LuChevronRight, LuX } from "react-icons/lu";
import { motion } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [keepOpen, setKeepOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 640) {
      setKeepOpen(false);
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="z-[999] relative">
      <nav className="fixed py-5 px-10 md:px-36 bg-black w-full flex items-center justify-between border-b-[0.4px] border-white/35">
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <a href="/">
            <h3 className={`${montserrat.className} text-3xl md:text-4xl flex`}>
              t
              <span className="relative flex items-start justify-center">
                e
                <div className="absolute top-1 w-[14px] h-1 rounded-full bg-green-400"></div>
              </span>
              mi
            </h3>
          </a>
        </motion.div>
        <div
          className={`sm:hidden p-2 flex items-center justify-center rounded-lg ${
            open && "bg-gray-600/45 "
          }`}
        >
          <motion.button
            onClick={() => setOpen(!open)}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {open ? (
              <LuX className="text-2xl" />
            ) : (
              <LuAlignJustify className="text-2xl" />
            )}
          </motion.button>
        </div>
        <div className="hidden sm:block">
          <ul className="flex items-center justify-center gap-x-5">
            {navLinks.map((item, index) => (
              <motion.li
                key={index}
                className="group"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {item.hasExtra && (
                  <span
                    onClick={() => setKeepOpen(!keepOpen)}
                    className={`relative cursor-pointer text-sm font-semibold text-[#6C6969] hover:text-white/65 transition flex items-center gap-x-1 ${
                      keepOpen && "underline"
                    }`}
                  >
                    {item.name}{" "}
                    {item.hasExtra && (
                      <LuChevronRight
                        className={`${
                          keepOpen && "rotate-90"
                        }  transition mt-1`}
                      />
                    )}
                    {keepOpen && (
                      <AdditionalOptions options={item.additonalLinks} />
                    )}
                  </span>
                )}
                <a
                  href={item.href}
                  className="relative hover:underline text-sm font-semibold text-[#6C6969] hover:text-white/65 transition flex items-center"
                >
                  {!item.hasExtra && item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
        {open && <MiniNavigation />}
      </nav>
    </header>
  );
};

export default Header;

type AddLinks = {
  name: string;
  href: string;
};

type AdditionalOptionsProps = {
  options?: AddLinks[];
};

const AdditionalOptions = ({ options }: AdditionalOptionsProps) => {
  return (
    <div className="absolute top-4 mt-5 bg-black w-[200px]">
      <ul
        className={`${options && "border-[0.8px] rounded-md border-white/65 "}`}
      >
        {options?.map((item, index) => (
          <a href={item.href} key={index}>
            <li className="py-3 text-[#6C6969] hover:text-white/65 px-2 rounded-md hover:bg-white/20">
              {item.name}
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

const MiniNavigation = () => {
  const [keepOpen, setKeepOpen] = useState(false);

  return (
    <div className="absolute top-10 left-0 mt-[40px] w-screen h-[85vh] bg-black py-10">
      <ul className="flex flex-col w-full gap-y-5 px-3 mx-auto ">
        {navLinks.map((item, index) => (
          <li
            key={index}
            className="group border-b-[0.8px] border-b-gray-600 py-2 font-semibold text-[#6C6969] hover:text-white/65"
          >
            {item.hasExtra && (
              <>
                <span
                  onClick={() => setKeepOpen(!keepOpen)}
                  className={`relative cursor-pointer text-sm font-semibold text-[#6C6969] hover:text-white/65 transition flex items-center gap-x-1 ${
                    keepOpen && "underline"
                  }`}
                >
                  {item.name}{" "}
                  {item.hasExtra && (
                    <LuChevronRight
                      className={`${keepOpen && "rotate-90"}  transition mt-1`}
                    />
                  )}
                </span>
                {keepOpen && (
                  <ul className=" ml-2 mt-2">
                    {item.additonalLinks?.map((item, index) => (
                      <a href={item.href} key={index}>
                        <li className="py-3 text-sm text-[#6C6969] hover:text-white/65 px-2 ">
                          {item.name}
                        </li>
                      </a>
                    ))}
                  </ul>
                )}
              </>
            )}
            <a
              href={item.href}
              className="relative hover:underline text-sm font-semibold text-[#6C6969] hover:text-white/65 transition flex items-center"
            >
              {!item.hasExtra && item.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="w-full h-1/2 flex items-center justify-center opacity-60">
        <div className="bg-gradient-to-b my-10 md:my-5 from-[#ffffff]/60 via-[#be3bff5b] to-[#28C052]/60 h-fit w-fit self-center p-[0.8px] rounded-lg ">
          <div className="bg-black px-10 py-5 rounded-lg">
            <h3 className={`${montserrat.className} text-7xl flex`}>
              t
              <span className="relative flex items-start justify-center">
                e
                <div className="absolute top-1 w-3/4 h-2 rounded-full bg-green-400"></div>
              </span>
              mi
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
