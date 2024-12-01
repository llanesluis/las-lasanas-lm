import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";

const fontSans = localFont({
  src: "../fonts/inter/InterVariable.woff2",
  variable: "--font-sans",
  weight: "100 900",
});

const fontSerif = localFont({
  src: "../fonts/dm-serif-display/DMSerifDisplay.ttf",
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
        className={`${fontSans.variable} ${fontSans.className} ${fontSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
