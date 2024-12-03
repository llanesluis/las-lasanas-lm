"use server";

import BienvenidoEmail from "@/components/emails/bienvenido";
import RappiEmail from "@/components/emails/rappi";
import { resend } from "@/lib/resend";

interface Email {
  from?: string;
  to: string;
  subject?: string;
}

export async function sendBienvenidoNewsletterEmail({
  from,
  to,
  subject,
}: Email) {
  try {
    const { data, error } = await resend.emails.send({
      from: from ?? "Acme <onboarding@resend.dev>",
      to: to ?? ["luisllaboj@gmail.com"],
      subject: subject ?? "Prueba de resend Newsletter",
      react: BienvenidoEmail(),
    });

    if (error) {
      console.error(error.message);
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
}

export async function sendRappiEmail({ from, to, subject }: Email) {
  try {
    const { data, error } = await resend.emails.send({
      from: from ?? "Acme <onboarding@resend.dev>",
      to: to ?? ["luisllaboj@gmail.com"],
      subject: subject ?? "Prueba de resend Rappi",
      react: RappiEmail(),
    });

    if (error) {
      console.error(error.message);
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
}
