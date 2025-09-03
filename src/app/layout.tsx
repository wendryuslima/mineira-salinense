import type { Metadata } from "next";

import "./globals.css";

import { Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mineira Salinense",
  description:
    "Cachaça artesanal com mais de 15 anos de experiência no ABC Paulista",
  icons: {
    icon: "/background-mineira-removebg-preview.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} dark antialiased`}>
        {children}
      </body>
    </html>
  );
}
