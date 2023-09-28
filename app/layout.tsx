import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { TabBar } from "./components/TabBar";
import { ThemeChanger } from "./components/ThemeChanger";
import "./globals.css";

//👇 Import our second font
import { IBM_Plex_Sans, Open_Sans } from "next/font/google";
import { Footer } from "./components/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  //👇 Add variable to our object
  variable: "--font-opensans",
});

//👇 Configure the object for our second font
const plexSans = IBM_Plex_Sans({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
});

export const metadata: Metadata = {
  title: "Yalla Dance Group",
  description: "Mini Manager.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${openSans.variable} ${plexSans.variable}`}>
      <body>
        
      <Footer />

      
        <nav className="flex justify-center p-10 ">
          <ThemeChanger />
        </nav>

        <TabBar />

        {children}

      </body>
    </html>
  );
}
