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
          <form
            action={async (formData) => {
              const { data, error } = await sendEmail(formData);

              if (error) {
                toast.error(error);
                return;
              }

              toast.success("Email sent successfully!");
            }}
            className="gap-3 grid grid-cols-1 md:grid-cols-2 flex-1 w-full"
          >
            <input
              type="text"
              name="senderName"
              placeholder="NAME"
              autoComplete="new-name"
              className="input col-span-2"
            />
            <select
              name="senderState"
              className="input font-thin uppercase py-3 cursor-pointer col-span-2"
            >
              {stateOptions.map((item, index) => (
                <React.Fragment key={index}>
                  <option value={item.value} className="mt-2">
                    {item.name}
                  </option>
                </React.Fragment>
              ))}
            </select>
            <input
              type="email"
              name="senderEmail"
              placeholder="EMAIL"
              autoComplete="new-password"
              className="input col-span-2 md:col-span-1"
            />
            <input
              type="tel"
              name="senderTel"
              placeholder="PHONE"
              autoComplete="new-password"
              className="input col-span-2 md:col-span-1"
            />
            <input
              type="text"
              name="subject"
              placeholder="SUBJECT"
              autoComplete="new-password"
              className="input col-span-2"
            />
            <textarea
              placeholder="MESSAGE"
              name="message"
              rows={10}
              className="input col-span-2"
            ></textarea>
            <SubmitButton />
          </form>
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
