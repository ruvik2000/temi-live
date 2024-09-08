import React from "react";
import { montserrat } from "../fonts";

const ProductOverview = () => {
  return (
    <main className="h-screen flex flex-col items-center justify-center gap-5 px-10">
      <div className="lg:hidden flex flex-col items-center justify-center">
        <h3 className="text-2xl flex">
          <span className={`mr-2 flex ${montserrat.className}`}>
            t
            <span className="relative flex items-center justify-center">
              e
              <div className="absolute top-1 w-[90%] h-1 bg-green-500 rounded-full"></div>
            </span>
            mi
          </span>
          product overview
        </h3>
        <h2 className="text-5xl">Coming Soon</h2>
      </div>
      <div className="hidden lg:flex w-3/4 h-3/4 mt-20">
        <div className="mx-auto w-3/4 h-full border-[0.8px] border-white/50 rounded-3xl flex flex-col ">
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
              <h1 className="absolute flex top-0 left-0 text-9xl font-semibold text-white/15">
                t
                <span className="relative flex items-center justify-center">
                  e
                  <div className="absolute top-5 w-[90%] h-4 rounded-full bg-green-400/50"></div>
                </span>
                mi
              </h1>
              <div className="flex flex-col items-center justify-center text-center gap-y-3 text-white/80">
                <h2 className="text-5xl">Product Overview</h2>
                <h4>
                  We will be launching this page soon. Till then stay tuned 🙂
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductOverview;
