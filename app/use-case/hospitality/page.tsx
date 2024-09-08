import { montserrat } from "@/app/fonts";
import TemiScreen from "@/components/art/temi-screen";
import CustomVideoCard from "@/components/cards/custom-video-card";
import SpecialsCard from "@/components/cards/specials-card";
import { specials2, useCases2 } from "@/lib/data";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "temi for Hospitality: Use cases and applications",
  description:
    "temi service robots support hospitality staff and delight guests. Explore use cases for hotels, events, and restaurants.",
  openGraph: {
    title: "temi for Hospitality: Use cases and applications",
    description:
      "temi service robots support hospitality staff and delight guests. Explore use cases for hotels, events, and restaurants.",
    siteName: "temi",
    type: "website",
    images: "/temi.png",
    url: "/use-case/hospitality",
  },
};

const Hospitality = () => {
  return (
    <main className="flex flex-col px-10 lg:px-[10rem]">
      <section className="scroll-mt-[100rem] h-[60vh] sm:h-[90vh] lg:h-screen flex flex-col items-end justify-center gap-y-4 pt-20 sm:pt-28">
        <TemiScreen
          title="Transform your guest experience with a service robot"
          description="Automate tasks in hotels, events, and restaurants with temi,
          adding a personal touch to keep your guests satisfied."
          img="/hospitality.jpg"
        />
      </section>
      <section className="scroll-mt-[100rem] mx-auto w-full md:w-[50%] flex flex-col items-center justify-center gap-y-5 ">
        <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-extralight">
          Our services
        </h2>
        <p className="text-center text-xs md:text-sm lg:text-base text-[#EFF5FF]/[69.41%]">
          Having consulted with various companies, we leverage our AI expertise
          to transform manual processes with customized solutions, including
          personal robot assistants, to enhance your operations.
        </p>
      </section>
      <div className="w-3/4 md:w-1/2 lg:w-1/4 h-[0.8px] self-center my-10 bg-gradient-to-r from-black via-white to-black" />
      <section className="flex flex-col gap-y-4 py-3">
        {specials2.map((item, index) => (
          <React.Fragment key={index}>
            <SpecialsCard {...item} />
          </React.Fragment>
        ))}
      </section>

      <div className="w-3/4 md:w-1/2 lg:w-1/4 h-[0.8px] self-center my-10 bg-gradient-to-r from-black via-white to-black" />
      <section className="flex flex-col gap-y-4 py-3">
        <h2 className="text-2xl md:text-3xl font-normal">
          <span className={`${montserrat.className} mr-1.5`}>temi</span>
          in action
        </h2>
        <div className="grid grid-cols-1 items-start md:grid-cols-2 gap-y-3 md:gap-x-3 place-items-center">
          {useCases2.map((item, index) => (
            <React.Fragment key={index}>
              <CustomVideoCard {...item} />
            </React.Fragment>
          ))}
        </div>
      </section>
      <section className="py-10 space-y-3 flex flex-col items-center">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-extralight">
          A service robot that enhances the human experience
        </h2>
        <p className="text-center text-sm md:text-base font-semibold text-white/65">
          Let temi engage your customers, delighting everyone.
        </p>
        <Link href={"/contact"} className="mx-auto ">
          <button className="bg-white text-black font-bold px-5 py-3 rounded-full">
            Schedule a demo
          </button>
        </Link>
      </section>
    </main>
  );
};

export default Hospitality;
