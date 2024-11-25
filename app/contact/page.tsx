"use client";

import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "@/components/buttons/submit-button";
import { stateOptions } from "@/lib/data";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { LuMapPin, LuPhone, LuMail } from "react-icons/lu";

const Contact = () => {
  return (
    <main className="flex flex-col px-10 lg:px-[10rem]">
      <section className="scroll-mt-[100rem] flex flex-col gap-y-3 pt-20 sm:pt-28">
        <h1 className="text-4xl text-center font-thin mt-5 md:text-5xl md:mt-0">
          CONTACT
        </h1>
        <div className="flex flex-col md:flex-row py-10 items-center justify-between max-sm:gap-y-10">
          <div className="flex-1 h-full space-y-5">
            <div className="flex items-center gap-x-3 w-[300px] mx-auto">
              <LuMapPin className="text-2xl" />
              <p>
                40 Bacon Street, Hindmarsh, <br /> South Australia 5007
              </p>
            </div>
            <div className="flex items-center gap-x-3 w-[300px] mx-auto">
              <LuPhone className="text-2xl" />
              <p>(08) 70016968</p>
            </div>
            <div className="flex items-center gap-x-3 w-[300px] mx-auto">
              <LuMail className="text-2xl" />
              <Link
                href={"mailto:suresan@omnihealth.com"}
                className="underline"
              >
                suresan@omnihealth.com
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
