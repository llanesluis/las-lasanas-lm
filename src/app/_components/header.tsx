import Button from "@/components/ui/button";
import { Container } from "@/components/ui/wrappers";
import NavLink from "./nav-link";
import Link from "next/link";
import { Menu } from "lucide-react";
import ExternalLink from "@/components/ui/external-link";
import WhatsApp from "@/components/icons/whatsapp";

export default function Header() {
  return (
    <header className="bg-scroll-header fixed top-[-1px] z-1 h-18 w-full bg-transparent starting:bg-transparent">
      <Container className="flex items-center gap-4">
        {/* todo: arreglar la tipografia a la original */}
        <nav className="flex w-full items-center justify-between gap-4">
          <Link
            href={"/"}
            className="font-bold text-nowrap transition-all sm:text-xl md:text-2xl"
          >
            LAS LASAÑAS
          </Link>

          {/* MAIN NAV */}
          <ul className="flex gap-8 max-md:hidden">
            <li>
              <NavLink href="/menu">Menú</NavLink>
            </li>
            <li>
              <NavLink href="/eventos">Eventos</NavLink>
            </li>
            <li>
              <NavLink href="/galeria">Galería</NavLink>
            </li>
            <li>
              <NavLink href="/blog">Blog</NavLink>
            </li>
          </ul>

          <ExternalLink href="https://api.whatsapp.com/send?phone=5216681500100&text=%C2%A1Hola%2C%20me%20interesa%20hacer%20un%20pedido%20de%20Lasa%C3%B1as!%20%3AD">
            <Button className="bg-accent flex gap-1 max-md:ml-auto">
              Ordena <WhatsApp />
            </Button>
          </ExternalLink>

          {/* TODO: MOBILE NAV */}
          <div className="md:hidden">
            <Menu className="cursor-pointer" />
          </div>
        </nav>
      </Container>
    </header>
  );
}
