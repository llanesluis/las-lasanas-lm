import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import Footer from "./_components/footer";
import Header from "./_components/header";
import { cn } from "@/lib/utils";
import { ScreenDevTools } from "@/components/devtools/screen-devtools";

const fontSans = localFont({
  src: "../app/fonts/inter/InterVariable.woff2",
  variable: "--font-sans",
  weight: "100 900",
});

const fontSerif = localFont({
  src: "../app/fonts/dm-serif-display/DMSerifDisplay.ttf",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: {
    template: "Las Lasañas LM | %s",
    default: "Las Lasañas LM",
  },
  description:
    "Disfruta lasañas deliciosas y rápidas en Los Mochis. Somos el único local de fast food especializado en lasañas en la ciudad. Perfectas para satisfacer tu antojo rápido y con sabor casero. ¡Ordena la tuya hoy!",
  keywords:
    "lasañas, fast food, delicioso, rápido, ciudad de Los Mochis, Los Mochis, pasta, pan, ensalada, comida italiana, queso, carne, lasañas en Los Mochis, Las Lasañas LM",

  icons: {
    icon: [
      {
        url: "/favicon/lasana-mascot_dark-mode_1.ico",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicon/lasana-mascot_light-mode_1.ico",
        media: "(prefers-color-scheme: light)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={cn(
          `${fontSans.variable} ${fontSans.className} ${fontSerif.variable} isolate grid antialiased`,
          "bg-background text-foreground",
          "flex min-h-screen flex-col",
        )}
      >
        <Header />
        <div className="isolate grow">{children}</div>
        <Footer />

        <ScreenDevTools />
      </body>
    </html>
  );
}
