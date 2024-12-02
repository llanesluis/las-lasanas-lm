import Button from "@/components/ui/button";
import { Container, Section } from "@/components/ui/wrappers";
import Image from "next/image";

export default function NewsletterBanner() {
  return (
    <Section className="bg-background relative md:py-24">
      <Container className="z-1 h-[50vh] max-sm:h-[80vh]">
        <div className="relative isolate size-full overflow-clip rounded-[96px_18px_96px_18px]">
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

          <form className="bg-primary absolute inset-x-0 bottom-0 flex w-full gap-x-4 gap-y-2 px-8 py-4 max-sm:flex-col">
            <input
              type="email"
              placeholder="Ingresa tu correo"
              className="bg-background max-w-[80%] min-w-[50%] rounded p-2 ring"
            />
            <Button className="bg-accent max-w-[80%]">Suscribirme</Button>
          </form>
        </div>
      </Container>
    </Section>
  );
}
