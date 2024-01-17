import { Resend } from "resend";
// import { toast } from "sonner";

const resend = new Resend("re_YuYGruAW_Ek4JhzoFAFaPLMjsXE8qkXQ1");

export default async function sendEmail(email: string): Promise<void> {
  console.log("HEREBRO");

  const { data, error } = await resend.emails.send({
    from: "mlkz@modkimono.com",
    to: [`${email}`],
    subject: "Waitlist Confirmation",
    html: `Thanks for joining the waitlist for our awesome product! You're one step closer to experiencing it.`,
  });

  if (error) {
    console.log("ERROR:", error);
    return;
  }

  console.log("Success!");
};
