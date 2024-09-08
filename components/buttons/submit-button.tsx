import React from "react";
import { useFormStatus } from "react-dom";
import { LuSend } from "react-icons/lu";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="group input transition-all flex items-center justify-center gap-x-2 !text-base font-semibold !bg-white !text-black col-span-2"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-black"></div>
      ) : (
        <>
          Submit{" "}
          <LuSend className="transition-all group-hover:translate-x-1 group-hover:-translate-y-1 " />
        </>
      )}
    </button>
  );
};

export default SubmitButton;
