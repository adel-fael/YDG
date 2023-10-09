import type { Metadata } from "next";
import { TabBar } from "./components/TabBar";
import { ThemeChanger } from "./components/ThemeChanger";
import "./globals.css";

import { Rubik } from "next/font/google";
import { PortfolioLink } from "./components/PortfolioLink";

const rubik = Rubik({
	weight: ["300", "400", "500", "600", "700"],
	subsets: ["arabic"],
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
		<html lang="en">
			<body className={rubik.className}>
				<nav className="flex flex-col items-center justify-between gap-3 p-10 sm:flex-row ">
					<PortfolioLink />
					<ThemeChanger />
				</nav>

				<TabBar />

				{children}
			</body>
		</html>
	);
}
