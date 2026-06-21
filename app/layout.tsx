import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Juan Diego Ramos Altamirano | Portafolio",
  description: "Portafolio profesional de Juan Diego Ramos Altamirano",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}