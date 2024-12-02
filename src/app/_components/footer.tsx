import Facebook from "@/components/icons/facebook";
import Instagram from "@/components/icons/instagram";
import WhatsApp from "@/components/icons/whatsapp";
import ExternalLink from "@/components/ui/external-link";
import { Container } from "@/components/ui/wrappers";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary bg-pattern-footer text-primary-foreground/60 z-1 pt-12 pb-24 inset-shadow-xs [&_a]:hover:opacity-80">
      <Container className="space-y-5 lg:space-y-8">
        {/* LOGO & INFO */}
        <section className="gap-8 sm:flex sm:items-center sm:justify-between">
          <div className="space-y-4">
            <div className="space-y-4">
              <Image
                src={"/images/logos/logo_white.webp"}
                alt="logo de la marca"
                height={100}
                width={100}
              />

              {/* todo: arreglar la tipografia a la original */}
              <span className="text-primary-foreground text-2xl font-semibold">
                LAS LASAÑAS
              </span>
            </div>
            <p className="max-w-[350px] text-xs">
              Somos el único local de fast food especializado en lasañas en la
              ciudad de Los Mochis. Perfectas para satisfacer tu antojo rápido y
              con sabor casero. ¡Ordena la tuya hoy!
            </p>
          </div>

          {/* SOCIAL LINKS Y HORARIOS*/}
          <div className="flex flex-col gap-4 self-end md:items-end">
            <ul className="mt-8 flex h-full justify-start gap-6 sm:mt-0 sm:justify-end">
              <li>
                <ExternalLink href="https://www.facebook.com/p/Las-lasa%C3%B1as-LM-61556244630807/">
                  <span className="sr-only">Facebook</span>
                  <Facebook />
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href="https://www.facebook.com/p/Las-lasa%C3%B1as-LM-61556244630807/">
                  <span className="sr-only">Instagram</span>
                  <Instagram />
                </ExternalLink>
              </li>
              <li>
                {/* todo: whatsapp link */}
                <ExternalLink href="#">
                  <span className="sr-only">WhatsApp</span>
                  <WhatsApp />
                </ExternalLink>
              </li>
            </ul>

            {/* HORARIOS*/}
            <div className="space-y-2">
              <p className="text-primary-foreground font-medium">Horarios</p>
              <div className="grid gap-4 text-xs md:grid-cols-3">
                <div className="flex flex-col">
                  <span className="font-semibold">Lunes a Viernes</span>
                  <span>00:00 am - 00:00 pm</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold">Sábado</span>
                  <span>00:00 am - 00:00 pm</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold">Domingo</span>
                  <span>00:00 am - 00:00 pm</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TODO: GENERAL LINKS */}
        <section className="grid grid-cols-1 gap-8 border-t border-neutral-100/40 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-10">
          <div>
            <p className="text-primary-foreground font-medium">Services</p>

            <ul className="mt-4 space-y-3 text-sm">
              {[1, 2, 3, 4].map((item, index) => (
                <li key={item}>
                  <FooterLink href="/"> {index} </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-primary-foreground font-medium">Company</p>

            <ul className="mt-4 space-y-3 text-sm">
              {[1, 2, 3].map((item, index) => (
                <li key={item}>
                  <FooterLink href="/"> {index} </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-primary-foreground font-medium">Helpful Links</p>

            <ul className="mt-4 space-y-3 text-sm">
              {[1, 2, 4].map((item, index) => (
                <li key={item}>
                  <FooterLink href="/"> {index} </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-primary-foreground font-medium">Legal</p>

            <ul className="mt-4 space-y-3 text-sm">
              {[1, 2].map((item, index) => (
                <li key={item}>
                  <FooterLink href="/"> {index} </FooterLink>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <p className="text-xs">
          &copy; 2024. Las Lasañas LM. Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  );
}

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  if (href.startsWith("/") || href.startsWith("#"))
    return <Link href={href}>{children}</Link>;

  return (
    <ExternalLink href={href} showIcon>
      {children}
    </ExternalLink>
  );
}
