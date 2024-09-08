"use client";

import ServerCard from "@/components/cards/serverCard";
import { industriesAndVert } from "@/lib/data";
import Link from "next/link";
import React from "react";
import { montserrat } from "../fonts";
import { LuArrowDown } from "react-icons/lu";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <main className="flex flex-col px-10 lg:px-[10rem]">
      <section className="relative scroll-mt-[100rem] mt-32 md:mt-16 flex flex-col justify-center md:px-32 gap-y-3 sm:pt-16">
        <div className="absolute  left-0 -bottom-16 w-full flex items-center justify-center">
          <div className="border border-gray-200 p-2 rounded-full animate-bounce bg-gray-900">
            <LuArrowDown className="text-xl text-gray-400" />
          </div>
        </div>
        <motion.div
          className="bg-gradient-to-b my-10 md:my-5 from-[#ffffff]/60 via-[#be3bff5b] to-[#28C052]/60 h-fit w-fit self-center p-[0.8px] rounded-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-black px-10 rounded-xl">
            <h3
              className={` ${montserrat.className} py-5 text-center text-6xl flex items-center justify-center `}
            >
              t
              <span className="relative flex items-start justify-center ">
                <div className="absolute rounded-full w-7 h-[6px] md:w-8 md:h-[8px] bg-green-400 "></div>
                e
              </span>
              mi
            </h3>
          </div>
        </motion.div>
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl  font-extralight text-white text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          A world where tasks are simplified and moments enriched
        </motion.h1>
        <p className="text-center text-sm md:text-lg font-light text-[#EFF5FF]/[69.41%] mt-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            temi – a service robot built around your needs, with AI that works
            for you in diverse environments.
          </motion.span>
          <br />
          <br />
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Powered by Omni-Health&apos;s innovation in Asia-Pacific healthcare,
            temi redefines your work or living space with advanced automation.
          </motion.span>
        </p>
      </section>
      <section className="py-16 flex flex-col gap-3">
        <div className=" w-full md:w-1/2 lg:w-1/4 h-[0.8px] self-center my-10 bg-gradient-to-r from-black via-white to-black" />
        <div className="flex flex-col text-center gap-y-3">
          <h2 className="mt-8 text-3xl md:text-4xl font-extralight">
            Industries and verticals
          </h2>
          <p className="mt-5 md:px-60 text-sm md:text-base font-semibold text-center text-[#EFF5FF]/[69.41%]">
            Since 2008, Omni-Health has served the healthcare and hospitality
            sectors as a trusted tech partner in the Asia-Pacific. Our
            specialized expertise supports businesses from small firms to large
            corporations, helping them overcome unique challenges and embrace
            opportunities.
          </p>
        </div>
        <div className="flex flex-row justify-center pb-3 my-8">
          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-3 gap-y-3">
            {industriesAndVert.map((item, index) => (
              <React.Fragment key={index}>
                <ServerCard {...item} />
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="mx-auto md:w-3/4 bg-gradient-to-br from-transparent via-[#8726b75b] to-[#28C052] p-[0.8px] rounded-2xl">
          <div className="py-5 px-10 flex items-center justify-center bg-black rounded-2xl">
            <h3 className="text-base md:text-xl flex items-center gap-x-1">
              Learn more about{" "}
              <a target="_blank" href="https://omnihealth.com/">
                <Image
                  src={"/omnilogo.svg"}
                  width={140}
                  height={140}
                  alt="Temi Robot"
                />
              </a>
            </h3>
          </div>
        </div>
      </section>
      <div className=" w-full md:w-1/2 lg:w-1/4 h-[0.8px] self-center my-10 bg-gradient-to-r from-black via-white to-black" />
      <section className="py-3">
        <div className="flex flex-col gap-y-3 mt-4 md:pb-2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extralight text-center">
            Who we serve
          </h2>
          <p className="mt-5 text-sm text-center md:text-base md:px-60 font-semibold text-[#EFF5FF]/[69.41%]">
            Bringing temi to Australia, we address staff shortages and
            streamline operations in healthcare and hospitality, through
            telepresence and AI. <br /> <br />
            We empower your team to collaborate seamlessly with temi.
          </p>
        </div>
        <div className="my-10 right-4 p-[0.8px] w-full lg:w-3/4 lg:mx-auto rounded-2xl bg-gradient-to-br from-[#ffffff] via-[#8726b75b] to-[#28C052]">
          <div className="relative overflow-hidden bg-black rounded-2xl px-5 py-6 flex flex-col gap-3">
            <div className="absolute -z-1 w-36 h-20 top-0 left-0 bg-white rounded-full blur-[90px]"></div>
            <p className="text-center text-base md:text-xl lg:text-2xl text-[#EFF5FF]/[69.41%]">
              How can we help?
              <Link href={"/contact"}>
                <button className="ml-2 px-3  py-2 rounded-full bg-white text-black text-sm font-semibold">
                  Schedule a demo
                </button>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
