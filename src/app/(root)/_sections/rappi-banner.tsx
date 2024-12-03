import BgCircle from "@/components/ui/bg-circle";
import { Container, Section } from "@/components/ui/wrappers";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function RappiBanner() {
  return (
    <Section className="bg-primary relative isolate overflow-clip py-16 md:py-24">
      <BgCircle className="right-0 bottom-0 translate-x-[35%] translate-y-[35%]" />
      <BgCircle className="right-0 bottom-0 translate-x-[60%] translate-y-[40%]" />
      <BgCircle className="right-0 bottom-0 translate-x-[40%] translate-y-[60%]" />

      <Image
        src={"/images/others/ramas-2.webp"}
        alt="rama-2"
        className={cn(
          "absolute right-0 bottom-0 z-[-1] translate-[10%] rotate-270",
          "max-md:size-42",
        )}
        width={190}
        height={240}
      />

      <Image
        src={"/images/others/ramas-3.webp"}
        alt="rama-3"
        className={cn("absolute top-0 left-0 z-[-1] max-w-[50%] rotate-180")}
        width={480}
        height={340}
      />

      <Container className="flex size-full flex-col items-center gap-6">
        <p className="text-muted mx-auto w-fit font-semibold uppercase md:text-lg">
          Encuentranos en
        </p>

        <div className="relative w-full max-w-[565px]">
          <Image
            className="size-full object-contain"
            src={"/images/rappi/rappi-logo-efecto.webp"}
            alt="Rappi logo"
            width={565}
            height={242}
          />
        </div>

        <div className="relative contents w-full">
          <button className="mx-auto cursor-pointer max-sm:hidden">
            <Image
              className="object-contain"
              src={"/images/rappi/rappi-button-desktop-efecto.webp"}
              alt="Rappi logo"
              width={385}
              height={105}
            />
          </button>

          <button className="mx-auto cursor-pointer sm:hidden">
            <Image
              className="object-contain"
              src={"/images/rappi/rappi-button-mobile-efecto.webp"}
              alt="Rappi logo"
              width={183}
              height={127}
            />
          </button>
        </div>
      </Container>
    </Section>
  );
}
