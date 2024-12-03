"use client";

import { sendBienvenidoNewsletterEmail } from "@/actions/send-email";
import Button from "@/components/ui/button";
import { Container, Section } from "@/components/ui/wrappers";
import Image from "next/image";
import { FormEvent } from "react";

export default function NewsletterBanner() {
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);

    const emailTo = formData.get("to") as string;

    if (!emailTo) {
      console.error("El campo de correo está vacío.");
      return;
    }

    try {
      const data = sendBienvenidoNewsletterEmail({ to: emailTo });
      console.log(data);

      form.reset();
    } catch (error) {
      console.error("Error mandando correo: ", error);
    }
  };

  return (
    <Section className="bg-background relative md:py-24">
      <Container className="z-1">
        <div className="relative isolate size-full h-[50vh] overflow-clip rounded-[96px_18px_96px_18px] max-sm:h-[80vh]">
          <Image
            src={"/images/others/newsletter.webp"}
            alt="newsletter banner"
            fill
            className="size-full object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-t from-transparent to-black/70" />

          <p className="text-primary-foreground absolute inset-x-0 top-[15%] z-1 m-auto w-[70%] text-center font-serif text-3xl sm:text-4xl lg:text-5xl">
            Mantente al tanto de nuestras promociones y platillos suscribiendote
            a nuestro Newsletter
          </p>

          <form
            className="bg-primary absolute inset-x-0 bottom-0 flex w-full gap-x-4 gap-y-2 px-8 py-4 max-sm:flex-col"
            onSubmit={sendEmail}
            method="post"
          >
            <input
              type="email"
              required
              name="to"
              placeholder="Ingresa tu correo"
              className="bg-background max-w-[80%] min-w-[50%] rounded p-2 ring"
            />
            <Button className="bg-accent max-w-[80%]">Suscribirme</Button>
          </form>
        </div>
        <p className="text-muted-foreground/80 max-w-none px-4 pt-2 text-xs italic sm:text-sm">
          * Al proporcionar tu correo autorizas recibir correos con promociones
          y nuevos lanzamientos.
        </p>
      </Container>
    </Section>
  );
}
