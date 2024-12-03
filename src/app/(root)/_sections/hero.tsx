import Button from "@/components/ui/button";
import { H1 } from "@/components/ui/headings";
import { Container, Section } from "@/components/ui/wrappers";
import Image from "next/image";
import { cn } from "@/lib/utils";
import WhatsApp from "@/components/icons/whatsapp";
import ExternalLink from "@/components/ui/external-link";
import Link from "next/link";

export default function Hero() {
  return (
    <Container>
      <Section className="relative grid h-screen gap-8 pt-20 md:grid-cols-2 md:gap-12 md:pt-24 lg:gap-20">
        <div className="flex max-w-[500px] flex-col gap-4 md:gap-8">
          <Image
            src={"/images/logos/logo_black.webp"}
            alt="logo de la marca"
            height={165}
            width={164}
          />

          <div className="@container">
            <p className="text-accent/80 text-sm font-semibold uppercase">
              Lasañas y Ensaladas
            </p>
            <H1 className="font-normal">
              ¡Perfectas para satisfacer tu antojo rápido y con
              <strong> sabor casero</strong>!
            </H1>
          </div>

          <p className="text-muted-foreground max-lg:w-[min(100%,320px)] max-md:w-full">
            Somos tu única opción de Lasañas y Ensaladas con sabor casero.
            ¡Atrevete a disfrutar de nuestros deliciosos platillos!
          </p>

          <div className="flex gap-4">
            <Link href="/menu">
              <Button>Menú</Button>
            </Link>

            <ExternalLink href="https://api.whatsapp.com/send?phone=5216681500100&text=%C2%A1Hola%2C%20me%20interesa%20hacer%20un%20pedido%20de%20Lasa%C3%B1as!%20%3AD">
              <Button className="bg-accent flex gap-2 max-md:ml-auto">
                Haz tu pedido <WhatsApp />
              </Button>
            </ExternalLink>
          </div>
        </div>

        <div className="relative inset-0 size-full py-12 pl-10 max-md:absolute lg:pl-20">
          <FloatingBgImages />

          <div className="relative size-full max-md:hidden">
            <div className="size-full overflow-clip rounded-[96px_16px_96px_16px] drop-shadow">
              <Image
                src={"/images/others/hero-lasana.webp"}
                className="object-cover"
                alt="Lasaña"
                fill
              />
            </div>

            <div className="size absolute bottom-[5%] aspect-square h-52 translate-x-[-50%] drop-shadow-lg transition-all lg:h-64">
              <Image
                src={"/images/others/hero-ensalada.webp"}
                className="object-contain"
                alt="Platillo"
                fill
              />
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
}

function FloatingBgImages() {
  return (
    <>
      <Image
        src={"/images/others/ramas-1.webp"}
        alt="rama-1"
        className={cn(
          "absolute top-0 left-0 z-[-1] translate-x-[-20%] translate-y-[-10%]",
          "max-md:inset-auto max-md:right-0 max-md:bottom-0 max-md:translate-x-[20%] max-md:translate-y-[30%] max-md:opacity-50",
        )}
        height={150}
        width={300}
      />
      <Image
        src={"/images/others/ramas-4.webp"}
        alt="rama-4"
        className={cn(
          "absolute top-0 right-0 z-[-1] translate-x-[45%] translate-y-[-20%]",
          "max-md:inset-auto max-md:top-[20%] max-md:right-0 max-md:translate-x-[40%] max-md:opacity-50",
        )}
        height={180}
        width={180}
      />
      <Image
        src={"/images/others/ramas-2.webp"}
        alt="rama-2"
        className={cn(
          "absolute right-0 bottom-0 z-[-1] translate-x-[75%] translate-y-[-45%]",
          "max-md:inset-auto max-md:top-[50%] max-md:left-0 max-md:translate-x-[-30%] max-md:opacity-50",
        )}
        width={170}
        height={220}
      />
    </>
  );
}
