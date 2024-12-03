import Button from "@/components/ui/button";
import { Container, Section } from "@/components/ui/wrappers";
import { MoveLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function RootNotFound() {
  return (
    <main>
      <Section className="mt-12 h-full">
        <Container className="grid place-items-center gap-4 font-mono max-sm:place-items-start sm:text-center">
          <Image
            className="max-w-[250px] object-contain"
            src={"/images/logos/lasana_mascot_triste.webp"}
            width={565}
            height={450}
            alt="logo triste 404"
          />
          <h1 className="text-4xl font-bold">404 - Página no encontrada</h1>
          <p className="text-muted-foreground">
            La página que buscas no existe.
          </p>

          <Button className="p flex w-fit items-center gap-2">
            <MoveLeft />
            <Link href={"/"}>Regresar al inicio</Link>
          </Button>
        </Container>
      </Section>
    </main>
  );
}
