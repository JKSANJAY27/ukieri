import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LightboxProvider } from "@/components/ui/Lightbox";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UK-India Hands-on Training Program",
  description: "Catalyst Validation: From Laboratory Research to Prototype Demonstration for Electrolytic Hydrogen Generation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative bg-white text-gray-900 font-sans`}
      >
        <div className="bg-noise" />
        <LightboxProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </LightboxProvider>
      </body>
    </html>
  );
}
