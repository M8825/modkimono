"use client";
import { useState } from "react";
import { Toaster, toast } from "sonner";

// import type { NextApiRequest, NextApiResponse } from "next";
import { POST } from "../api/send/route";

export default function WaitList() {
  const [emailValue, setEmailValue] = useState("");

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  function validateEmail(email: string) {
    return email !== "" && emailRegex.test(email);
  }


  async function handleSubmit(e: any) {
    e.preventDefault();

    if (!validateEmail(emailValue)) {
      toast.error("Please enter a valid email.");
      return;
    }

    await POST(emailValue);

    console.log("FooBar", emailValue);
  }

  return (
    <div>
      <Toaster
        richColors
        position="bottom-right"
        expand={false}
        toastOptions={{
          style: {
            background: "rgb(0,0,0,0.5)",
            border: "1px solid transparent",
            boxShadow:
              "0 0 0 1px hsla(0, 0%, 100%, .145), 0px 2px 2px rgba(0, 0, 0, .52), 0px 8px 8px -8px rgba(0, 0, 0, 1.16)",
            backgroundColor: "rgb(23 23 23)",
            userSelect: "none",
          },
        }}
      />
      <div className="flex flex-col gap-3">
        <div className="w-500 flex flex-col gap-1">
          <p className="text-lgray font-open-sans">It`s on the way</p>
          <p className="text-dgray font-open-sans text-xs">
            Sign up to be the first to know when it launches.
          </p>
        </div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="w-500 flex flex-row hover:ring-1 hover:ring-zinc-700 rounded-md"
        >
          <input
            type="email"
            className="w-9/12	 rounded-tl-md rounded-bl-md p-4 bg-neutral-900 focus:outline-none placeholder:select-none placeholder-neutral-700"
            placeholder="email"
            onChange={(e) => setEmailValue(e.target.value)}
            value={emailValue}
          />
          <button
            type="submit"
            className="w-3/12	 bg-zinc-800 rounded-tr-md rounded-br-md p-4 text-dgray hover:text-lgray font-open-sans text-xs disabled:bg-zinc-800 disabled:hover:bg-zinc-800 disabled:text-dgray disabled:opacity-50 select-none"
            disabled={!validateEmail(emailValue)}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
