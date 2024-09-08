import TemiScreen from "@/components/art/temi-screen";
import Link from "next/link";
import React from "react";
import { montserrat } from "./fonts";
import { HiArrowNarrowRight } from "react-icons/hi";

const NotFound = () => {
  return (
    <main className="h-screen flex flex-col items-center justify-center gap-5 px-10">
      <div className="lg:hidden flex flex-col items-center justify-center">
        <h1 className="text-[10em]">404</h1>
        <h3 className="font-extrabold text-2xl">Page Not Found</h3>
        <Link
          href={"/"}
          className="border text-white font-bold rounded-xl mt-10 px-16 py-3 hover:border-green-400 hover:underline transition"
        >
          Home
        </Link>
      </div>
      <div className="hidden lg:flex w-3/4 h-3/4 mt-20">
        <div className="mx-auto w-3/4 h-full border-[0.8px] border-white/50 rounded-3xl flex flex-col opacity-50">
          <div className="w-full h-[5em] rounded-t-3xl flex items-center justify-center gap-x-10">
            <div className="w-8 h-8 bg-white/30 rounded-full"></div>
            <div className="flex items-center justify-center gap-x-2">
              <div className="w-5 h-5 bg-white/30 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-black/10 rounded-full"></div>
              </div>
              <div className="w-5 h-5 bg-white/30 rounded-full flex items-center justify-center"></div>
              <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center"></div>
              <div className="flex flex-col gap-y-1 items-center justify-center">
                <div className="w-2 h-2 bg-white/15 rounded-full"></div>
                <div className="w-3 h-3 bg-white/15 rounded-full"></div>
              </div>
              <div className="w-5 h-5 bg-white/30 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-black/10 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-full flex-1 rounded-b-3xl flex items-center justify-center">
            <div
              className={`relative w-[90%] h-[90%] border-[0.8px] border-white/50 rounded-xl flex items-center justify-center`}
            >
              <h1 className="absolute top-0 left-0 opacity-15 text-9xl font-semibold">
                404
              </h1>
              <div className="flex flex-col items-center justify-center text-center gap-y-3">
                <h2 className="text-5xl">There&apos;s NOTHING here...</h2>
                <h4>
                  ...maybe the page you&apos;re looking for is not found or
                  never existed.{" "}
                </h4>
                <Link
                  href={"/"}
                  className="flex items-center justify-center gap-x-2 bg-white/50 text-black/80 px-10 py-3 rounded-xl hover:bg-white/80 hover:text-black/80 transition"
                >
                  Back to home
                  <HiArrowNarrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
