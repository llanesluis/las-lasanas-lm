import WhatsApp from "@/components/icons/whatsapp";
import Button from "@/components/ui/button";
import ExternalLink from "@/components/ui/external-link";
import { H2, H3 } from "@/components/ui/headings";
import Placeholder from "@/components/ui/placeholder";
import { Container, Section } from "@/components/ui/wrappers";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="bg-card relative isolate">
      <FloatingBgImages />

      <Container className="py-20">
        <Section className="relative grid min-h-screen grid-rows-[auto_auto_1fr] gap-8">
          <header className="h-fit">
            <H2 className="pb-2 text-center">Nuestro Menú Especial</H2>
            <p className="text-muted-foreground m-auto w-[300px] text-center">
              Platillos que nos hacen unicos. Con toque casero y elegante.
            </p>
          </header>

          {/* MENU */}
          <section className="py-16">
            <div className="mt-16 grid w-full gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
              {/* LASAÑAS*/}
              <>
                <Placeholder className="bg-primary ring-primary h-[300px] pt-24 ring-2 backdrop-blur-xs">
                  <div className="bg-primary absolute inset-x-0 top-0 mx-auto size-42 translate-y-[-50%] overflow-clip rounded-full shadow">
                    <Image
                      src={"/images/menu/lasagnas/clasica.jpg"}
                      className="size-full object-cover"
                      alt="Lasaña clasica"
                      fill
                    />
                  </div>
                  <span className="text-2xl font-semibold text-red-500">
                    $110
                  </span>
                  <p className="text-primary-foreground mt-2 font-serif text-lg">
                    Lasaña Clásica
                  </p>
                  <p className="text-muted line-clamp-3">
                    Porción individual con pan y ensalada incluidos.
                  </p>
                </Placeholder>

                <Placeholder className="ring-primary h-[300px] bg-transparent pt-24 ring-2 backdrop-blur-xs">
                  <div className="bg-primary absolute inset-x-0 top-0 mx-auto size-42 translate-y-[-50%] overflow-clip rounded-full shadow">
                    <Image
                      src={"/images/menu/lasagnas/lasagnita.jpg"}
                      className="size-full object-cover"
                      alt="Lasañita"
                      fill
                    />
                  </div>
                  <span className="text-accent text-2xl font-semibold">
                    $70
                  </span>
                  <p className="text-foreground mt-2 font-serif text-lg">
                    Lasañita
                  </p>
                  <p className="text-muted-foreground line-clamp-3">
                    Porción individual sin acompañamientos.
                  </p>
                </Placeholder>
              </>

              <>
                <Placeholder className="bg-background ring-background h-[300px] pt-24 ring-2 backdrop-blur-xs">
                  <div className="bg-muted absolute inset-x-0 top-0 mx-auto size-42 translate-y-[-50%] overflow-clip rounded-full shadow">
                    <Image
                      src={"/images/menu/lasagnas/charola.jpg"}
                      className="size-full object-cover"
                      alt="platillo"
                      fill
                    />
                  </div>
                  <span className="text-accent text-2xl font-semibold">
                    $300
                  </span>
                  <p className="text-foreground mt-2 font-serif text-lg">
                    Lasaña para Compartir
                  </p>
                  <p className="text-muted-foreground line-clamp-3">
                    Ideal para compartir entre tres personas.
                  </p>
                </Placeholder>

                <Placeholder className="ring-background h-[300px] bg-transparent pt-24 ring-2 backdrop-blur-xs">
                  <div className="bg-muted absolute inset-x-0 top-0 mx-auto size-42 translate-y-[-50%] overflow-clip rounded-full shadow">
                    <Image
                      src={"/images/menu/salads/salad-1.jpg"}
                      className="size-full object-cover"
                      alt="Ensalada de pollo"
                      fill
                    />
                  </div>
                  <span className="text-accent text-2xl font-semibold">
                    $110
                  </span>
                  <p className="text-foreground mt-2 font-serif text-lg">
                    Ensalada de Pollo
                  </p>
                  <p className="text-muted-foreground line-clamp-3">
                    Incluye barria fría y aderezo de su elección.
                  </p>
                </Placeholder>
              </>
            </div>
          </section>

          {/* PLATILLO ESPECIAL */}
          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            <div className="relative isolate grid aspect-square place-items-center">
              <Image
                src={"/images/others/hoja-1.webp"}
                alt="hoja"
                className="absolute inset-y-0 left-0 z-1 my-auto translate-x-[-20%] translate-y-[-20%] drop-shadow"
                width={90}
                height={190}
              />
              <Image
                src={"/images/others/hoja-2.webp"}
                alt="hoja"
                className="absolute bottom-0 left-[15%] z-1 translate-y-[20%] drop-shadow"
                width={210}
                height={135}
              />
              <Image
                src={"/images/others/hoja-3.webp"}
                alt="hoja"
                className="absolute top-0 right-0 z-1 translate-[30%] drop-shadow"
                width={195}
                height={130}
              />
              <Image
                src={"/images/others/hoja-4.webp"}
                alt="hoja"
                className="absolute inset-0 z-1 m-auto translate-x-[120%] translate-y-[60%] drop-shadow"
                width={85}
                height={158}
              />
              <Image
                src={"/images/others/platillo-especial.webp"}
                alt="platillo especial"
                fill
                className="size-full object-contain"
              />
            </div>

            <div className="flex flex-col justify-center gap-4">
              <H3>Explora nuestro Menú</H3>
              <p className="text-muted-foreground w-[80%]">
                Ofrecemos desde platillos de individuales hasta opciones ideales
                para grandes eventos. ¡Enamórate de nuestras Lasañas y
                Ensaladas!
              </p>
              <div className="flex gap-4 pt-6">
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
          </div>
        </Section>
      </Container>
    </div>
  );
}

function FloatingBgImages() {
  return (
    <>
      <Image
        src={"/images/others/ramas-4.webp"}
        alt="rama-4"
        className={cn(
          "absolute top-0 right-[70%] z-[-1] translate-y-[25%] opacity-50",
        )}
        height={180}
        width={180}
      />
      <Image
        src={"/images/others/ramas-2.webp"}
        alt="rama-2"
        className={cn(
          "absolute top-0 left-[70%] z-[-1] translate-y-[15%] opacity-50",
        )}
        width={140}
        height={190}
      />

      <Image
        src={"/images/others/ramas-1.webp"}
        alt="rama-1"
        className={cn(
          "absolute bottom-[30%] left-0 z-[-1] translate-y-[-10%] rotate-180 opacity-50",
          "max-md:w-[250px]",
        )}
        height={220}
        width={370}
      />

      <Image
        src={"/images/others/ramas-3.webp"}
        alt="rama-3"
        className={cn(
          "absolute right-0 bottom-0 z-[-1] translate-y-[-20%] opacity-50",
          "max-md:w-[200px]",
        )}
        height={210}
        width={360}
      />

      <Image
        src={"/images/others/ajo.webp"}
        alt="ajo"
        className={cn(
          "absolute inset-0 z-[-1] m-auto translate-y-[25%] opacity-50",
          "max-md:w-[120px]",
        )}
        height={160}
        width={170}
      />

      <Image
        src={"/images/others/diente-ajo.webp"}
        alt="diente de ajo"
        className={cn(
          "absolute top-[50%] right-[20%] z-[-1] m-auto opacity-50",
        )}
        height={70}
        width={80}
      />

      <Image
        src={"/images/others/ajo.webp"}
        alt="ajo"
        className={cn(
          "absolute top-[35%] right-0 z-[-1] m-auto opacity-50",
          "max-md:w-[80px]",
        )}
        height={110}
        width={100}
      />

      <Image
        src={"/images/others/cebolla.webp"}
        alt="ajo"
        className={cn(
          "absolute top-[30%] left-[10%] z-[-1] m-auto opacity-50",
          "max-md:w-[90px]",
        )}
        height={125}
        width={120}
      />

      <Image
        src={"/images/others/apio.webp"}
        alt="ajo"
        className={cn(
          "absolute inset-0 z-[-1] m-auto translate-y-[-250%] opacity-50",
          "max-md:hidden",
        )}
        height={110}
        width={200}
      />
    </>
  );
}
