import type { Metadata } from 'next';
// import localFont from "next/font/local";
import './globals.css';
import PrelineScript from '@/app/components/PrelineScript';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

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
    title: 'Joseph and Susan Pisacano Memorial Foundation',
    description: 'Joseph and Susan Pisacano Memorial Foundation',
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
                <div className="flex flex-col overflow-x-clip">
                    <Navbar />
                    <main className="flex flex-grow flex-col">{children}</main>
                    <Footer />
                </div>
            </body>
            <PrelineScript />
        </html>
    );
}
