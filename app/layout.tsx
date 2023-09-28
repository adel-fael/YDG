import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Link from "next/link";
import { TabBar } from "./components/TabBar";
import { ThemeChanger } from "./components/ThemeChanger";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


//👇 Import our second font
import { Open_Sans, IBM_Plex_Sans } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  //👇 Add variable to our object
  variable: '--font-opensans',
})

//👇 Configure the object for our second font
const plexSans = IBM_Plex_Sans({
  weight: "500",
  subsets: ['latin'],
  variable: '--font-ibm-plex-sans',
})

export const metadata: Metadata = {
  title: "Yalla Dance Group",
  description: "Mini manager for organization.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${openSans.variable} ${plexSans.variable}`}>
      <body className={inter.className}>
        <section className="flex justify-center p-10 ">
          <ThemeChanger />
        </section>
        <TabBar />
        {children}
      </body>
    </html>
  );
}
