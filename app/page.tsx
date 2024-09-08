"use client";

import NormalHr from "@/components/lines/normal-hr";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { montserrat } from "./fonts";
import { highlights, statsData, temiAction } from "@/lib/data";
import HighlightCard from "@/components/cards/highlight-card";
import ActionCard from "@/components/cards/action-card";
import RoundChart from "@/components/chart/round-chart";
import { motion } from "framer-motion";
import { LuArrowDown } from "react-icons/lu";

const section2Animations = {
  initial: {
    y: 10,
    opacity: 0,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.05 * index,
    },
  }),
};

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="scroll-mt-[100rem] overflow-hidden h-[100vh] flex flex-col md:flex-row px-15 md:px-20 pt-20 md:pt-28 sm:pt-34">
        <div className="flex flex-1 flex-col items-center gap-5 md:flex-1 md:items-start justify-center">
          <div className="flex flex-col gap-2 md:gap-5 h-fit">
            <motion.h1
              className="text-center font-light md:font-semibold text-3xl md:text-4xl md:text-left lg:font-medium lg:text-5xl xl:text-6xl"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className={`${montserrat.className} mr-2`}>temi:</span>
              Learning to care with innovation
            </motion.h1>
            <motion.p
              className="text-center font-light text-[#f1f7feb5] text-sm md:text-lg md:font-semibold md:text-left lg:font-medium "
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Adapting with a personal touch to engage interactions everywhere.
            </motion.p>
          </div>
          <div className="w-full flex items-center justify-center md:hidden mt-4">
            <Link href={"#meetTemi"}>
              <div className="border border-gray-200 p-2 rounded-full animate-bounce bg-gray-900">
                <LuArrowDown className="text-xl text-gray-400" />
              </div>
            </Link>
          </div>
          <hr className="bg-white w-full h-[2px] mt-5 hidden md:block" />
          <motion.div
            className="w-full flex mt-5 items-center max-md:justify-center gap-2 "
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="text-xl">Powered by</h2>
            <div className="bg-[#2F538E] px-2 py-1">
              <Image
                src={"/omnilogo.svg"}
                width={150}
                height={150}
                alt="Temi Robot"
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          className=" flex items-end justify-center md:justify-end lg:flex-1"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={"/TemiBanner.png"}
            width={150}
            height={150}
            alt="Temi Robot"
            priority={true}
            quality={98}
            className="block md:hidden"
          />
          <Image
            src={"/TemiBanner.png"}
            width={350}
            height={350}
            alt="Temi Robot"
            className="hidden md:block"
          />
        </motion.div>
        <div className="hidden absolute left-0 bottom-5 w-full md:flex items-center justify-center">
          <Link href={"#meetTemi"}>
            <div className="border border-gray-200 p-2 rounded-full animate-bounce bg-gray-900">
              <LuArrowDown className="text-xl text-gray-400" />
            </div>
          </Link>
        </div>
      </section>
      <NormalHr />
      <section
        id="meetTemi"
        className="scroll-mt-[80px] py-16 sm:py-26 flex flex-col items-center justify-center gap-5"
      >
        <motion.h2
          className="py-2 text-center text-3xl md:text-3xl lg:font-medium lg:text-4xl xl:text-5xl bg-gradient-to-r from-[#28C052] to-[#2F548C] inline-block text-transparent bg-clip-text"
          variants={section2Animations}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={0}
        >
          Meet temi
        </motion.h2>
        <motion.p
          className="text-center px-5 text-xs md:text-sm md:px-[10rem] lg:text-base text-[#EFF5FF]/[69.41%]"
          variants={section2Animations}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={2}
        >
          Your personal robot assistant that seamlessly integrates into your
          world. With its advanced AI, temi understands your needs and
          harmonizes with your existing technology, offering a helping hand that
          is smart and caring.
        </motion.p>
      </section>
      <NormalHr />
      <section className="scroll-mt-[100rem] py-16 sm:py-26 flex flex-col items-center justify-center gap-5">
        <motion.h2
          className="py-2 text-3xl md:text-3xl lg:font-medium lg:text-4xl xl:text-5xl bg-gradient-to-r from-[#28C052] to-[#2F548C] inline-block text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Highlights
        </motion.h2>
        <div className="relative w-full flex justify-center">
          <Image
            src="/Highlights.png"
            alt="Temi Highlights"
            width={350}
            height={350}
            className="hidden md:block "
          />
          <Image
            src={"/HighlightsMobile.png"}
            alt="Temi Highlights"
            width={350}
            height={350}
            className="absolute md:hidden -left-36 top-10"
          />
          <div className="hidden md:block absolute md:w-3/4 lg:w-[80%] xl:w-1/2 h-full">
            <motion.div
              className="absolute p-[0.8px] w-[250px] rounded-[59px] bg-gradient-to-br from-[#ffffff] via-[#8726b75b] to-[#28C052]"
              initial={{ opacity: 0, y: -10 }}
              transition={{ duration: 1, delay: 0.2 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="relative overflow-hidden bg-black rounded-[59px] px-5 py-6 flex flex-col gap-3">
                <div className="absolute -z-1 w-36 h-20 top-0 left-0 bg-white rounded-full blur-[90px]"></div>
                <motion.h4
                  className="text-center"
                  initial={{ opacity: 0, x: -10 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  Seamless integration and customization
                </motion.h4>
                <motion.p
                  className="text-center text-xs text-[#EFF5FF]/[69.41%]"
                  initial={{ opacity: 0, x: -10 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  Effortlessly syncs with your systems, temi adapts to your
                  institutional needs, enhancing workflow and service quality.
                </motion.p>
              </div>
            </motion.div>
            <motion.div
              className="absolute right-0 bottom-0 top-0 flex items-center justify-center "
              initial={{ opacity: 0, x: 10 }}
              transition={{ duration: 1, delay: 0.2 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="p-[0.8px] w-[250px] rounded-[59px] bg-gradient-to-br from-[#ffffff] via-[#8726b75b] to-[#28C052]">
                <div className="relative overflow-hidden bg-black rounded-[59px] px-5 py-6 flex flex-col gap-3">
                  <div className="absolute -z-1 w-36 h-20 top-0 left-0 bg-white rounded-full blur-[90px]"></div>
                  <h4 className="text-center">
                    Intelligent interaction and navigation
                  </h4>
                  <p className="text-center text-xs text-[#EFF5FF]/[69.41%]">
                    Equipped with intuitive AI, temi understands and responds to
                    human needs, while navigating spaces independently and
                    safely.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="absolute bottom-0 p-[0.8px] w-[250px] rounded-[59px] bg-gradient-to-br from-[#ffffff] via-[#8726b75b] to-[#28C052]"
              initial={{ opacity: 0, x: -10 }}
              transition={{ duration: 1, delay: 0.2 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="relative overflow-hidden bg-black rounded-[59px] px-5 py-6 flex flex-col gap-3">
                <div className="absolute -z-1 w-36 h-20 top-0 left-0 bg-white rounded-full blur-[90px]"></div>
                <motion.h4
                  className="text-center"
                  initial={{ opacity: 0, x: -10 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  Data-driven insights
                </motion.h4>
                <motion.p
                  className="text-center text-xs text-[#EFF5FF]/[69.41%]"
                  initial={{ opacity: 0, x: -10 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  temi improves interactions and offers real-time data for
                  smarter decisions and continuous improvements.
                </motion.p>
              </div>
            </motion.div>
          </div>
          <div className="md:hidden w-full h-full flex flex-col gap-4 items-end pr-5">
            {highlights.map((item, index) => (
              <React.Fragment key={index}>
                <HighlightCard
                  title={item.title}
                  description={item.description}
                  index={index}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      <section className="scroll-mt-[100rem] py-16 sm:py-26 flex flex-col items-center justify-center gap-5">
        <motion.h2
          className="py-2 text-3xl md:text-3xl lg:font-medium lg:text-4xl xl:text-5xl text-center bg-gradient-to-r from-[#28C052] to-[#2F548C] inline-block text-transparent bg-clip-text"
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Breaking down healthcare work time
        </motion.h2>
        <div className="w-[85%] md:w-[90%] grid grid-cols-1 lg:grid-cols-2 border-t rounded-2xl">
          {statsData.map((item, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center mt-4 md:mt-8">
                <div className="w-[30%] lg:w-[50%] flex items-center justify-start lg:justify-center ">
                  <RoundChart percentage={item.percentage} />
                </div>
                <div className="flex-1 px-2 md:pr-10 lg:pr-0">
                  <p className="text-xs md:text-base">{item.description}</p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
      <section className="scroll-mt-[100rem] py-16 sm:py-26 px-5 md:px-20">
        <motion.h2
          className="py-2 text-3xl md:text-3xl lg:font-light lg:text-4xl xl:text-5xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          temi in action:
        </motion.h2>
        {/* <motion.h4
          className="text-[#EFF5FF]/[69.41%] text-sm md:text-xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Transformative scenarios for healthcare and beyond
        </motion.h4> */}
        <div className="flex items-center justify-center py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 place-items-center">
            {temiAction.map((item, index) => (
              <React.Fragment key={index}>
                <ActionCard
                  description={item.description}
                  src={item.src}
                  index={index}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      <section className="scroll-mt-[100rem] pb-16 sm:pb-20 px-5 flex flex-col gap-5">
        <div className="flex items-center justify-center flex-col">
          <motion.h2
            className="text-3xl md:text-5xl"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Connect with temi.
          </motion.h2>
          <motion.h2
            className="text-3xl md:text-5xl"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Explore the possibilities.
          </motion.h2>
        </div>
        <div className="flex flex-col items-center gap-5 md:flex-row md:justify-center ">
          <Link href={"/contact"} className="max-md:w-full">
            <motion.button
              className="w-full h-[3rem] md:text-lg md:w-[15rem] md:h-[4rem] py-2 rounded-full bg-white text-black font-semibold hover:underline"
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Schedule a demo
            </motion.button>
          </Link>
        </div>
      </section>
      <section className="flex items-center justify-center">
        <motion.div
          className="-mb-10 -z-10 max-sm:hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={"/temilogobottom.png"}
            width={1000}
            height={500}
            quality={98}
            priority
            alt="Temi"
          />
        </motion.div>
      </section>
    </main>
  );
}
