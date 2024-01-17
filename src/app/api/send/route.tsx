'use server';

import { Resend } from "resend";
import { EmailTemplate } from "../../ui/EmailTemplate/email-template";

const resend = new Resend("re_YuYGruAW_Ek4JhzoFAFaPLMjsXE8qkXQ1");

export async function POST(email: string): Promise<void> {
  console.log("HEREBRO");

  const { data, error } = await resend.emails.send({
    from: "mlkz@modkimono.com",
    to: [`${email}`],
    subject: "Waitlist Confirmation",
    react: EmailTemplate(),
  });

  if (error) {
    console.log("ERROR:", error);
    return;
  }

  console.log("Success!");
};
