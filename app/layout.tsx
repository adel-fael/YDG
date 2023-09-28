import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TabBar } from "./components/TabBar";
import { ThemeChanger } from "./components/ThemeChanger";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YallaDanceGroup",
  description: "Spread sheet for displaying data.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-center p-10 ">
          <ThemeChanger />
        </div>

        <TabBar />



        {children}
      </body>
    </html>
  );
}
