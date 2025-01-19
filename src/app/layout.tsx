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
  title: "Gold Gums - Premium Industrial Adhesives",
  description: "Gold Gums is a trusted name in industrial adhesives and food products, delivering quality from Sagar to the world.",
  keywords: "gold gums, Gold Gums, gold gums Sagar, industrial adhesives, premium adhesives, adhesives manufacturer",
  openGraph: {
    title: "Gold Gums - Premium Industrial Adhesives",
    description: "Discover Gold Gums for trusted industrial adhesives and food products. Serving quality from Sagar to the world.",
    url: "https://goldgums.in", 
    type: "website",
    images: [
      {
        url: "https://www.goldgums.in/_next/static/media/Logo.25d57eb6.svg", 
        width: 1200,
        height: 630,
        alt: "Gold Gums - Premium Products",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="Dhruv Jain" content="Gold Gums Team" />
        <link rel="canonical" href="https://goldgums.in" /> 
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Gold Gums",
              url: "https://goldgums.in", 
              logo: "https://www.goldgums.in/_next/static/media/Logo.25d57eb6.svg",
              description:
                "Gold Gums is a leading manufacturer of industrial adhesives and food products.",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
