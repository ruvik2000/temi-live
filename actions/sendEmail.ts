"use server";

import ContactFormEmail from "@/components/email/contact-form-email";
import { getErrorMessage, validateString } from "@/lib/utils";
import { error } from "console";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderName = formData.get("senderName");
  const senderState = formData.get("senderState");
  const senderEmail = formData.get("senderEmail");
  const senderTel = formData.get("senderTel");
  const subject = formData.get("subject");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid sender email" };
  }

  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }

  let data;

  try {
    await resend.emails.send({
      from: "temi Contact Form <onboarding@resend.dev>",
      to: "info@omnihealth.com",
      subject: subject as string,
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        senderName: senderName as string,
        senderState: senderState as string,
        senderEmail: senderEmail as string,
        senderTel: senderTel as string,
        message: message as string,
      }),
    });
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }

  return {
    data,
  };
};
