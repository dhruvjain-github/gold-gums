import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GoldGums",
  description: "created by Dhruv Jain ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <title>GoldGums</title>
      <meta name="description" content="created by Dhruv Jain" />
      {/* Link to your favicon */}
      <link rel="icon" href="/Fav.ico" type="image/svg+xml" />
      </head>
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased `}
    >
      <Navbar />
      {children}
      <Footer />
    </body>
  </html>
  );
}
