import Button from "@/components/ui/button";
import { Container } from "@/components/ui/wrappers";
import NavLink from "./nav-link";
import Link from "next/link";
import { Menu } from "lucide-react";

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
            <li>
              <NavLink href="/fake">Fake</NavLink>
            </li>
          </ul>

          <Button className="bg-accent max-md:ml-auto">
            Cotiza para eventos
          </Button>

          {/* TODO: MOBILE NAV */}
          <div className="md:hidden">
            <Menu className="cursor-pointer" />
          </div>
        </nav>
      </Container>
    </header>
  );
}
