"use client";
import { useState } from "react";
import { Toaster, toast } from "sonner";

export default function WaitList() {
  const [emailValue, setEmailValue] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    toast.success("Thanks for signing up!");
  }

  return (
    <div>
      <Toaster
        richColors
        position="top-left"
        expand={false}
        style={{ zIndex: 1 }}
      />
      <div className="flex flex-col gap-3">
        <div className="w-500 flex flex-col gap-1">
          <p className="text-mk-color-light-gray font-open-sans">
            It`s on the way
          </p>
          <p className="text-mk-color-dark-gray font-open-sans text-xs">
            Sign up to be the first to know when it launches.
          </p>
        </div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="w-500 flex flex-row hover:ring-1 hover:ring-zinc-700 rounded-md"
        >
          <input
            type="text"
            className=" w-full ph-zinc-700 rounded-tl-md rounded-bl-md p-4 bg-neutral-900 focus:outline-none"
            placeholder="email"
            onChange={(e) => setEmailValue(e.target.value)}
            value={emailValue}
          />
          <button
            type="submit"
            className="bg-zinc-800 rounded-tr-md rounded-br-md p-4 text-dgray hover:text-lgray font-open-sans text-xs"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}