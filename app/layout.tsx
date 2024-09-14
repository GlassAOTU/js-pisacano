import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import PrelineScript from "@/components/PrelineScript";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
	title: "Pisacano Foundation",
	description: "Joseph and Susan Pisacano Memorial Foundation",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
			// className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Navbar />
				{children}
				<Footer />
			</body>
			<PrelineScript />
		</html>
	);
}
