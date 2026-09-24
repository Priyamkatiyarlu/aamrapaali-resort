import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aamrapaali | Grand Resort, Buckingham Palace & Royal Destination Weddings",
  description: "Experience royal luxury at Aamrapaali. Featuring Buckingham Palace banquets, opulent destination weddings, luxury hotel suites, waterpark, and fine dining.",
  keywords: ["Aamrapaali", "Buckingham Palace", "Royal Weddings", "Luxury Resort", "Waterpark", "Destination Wedding India", "Hotel & Banquets"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} scroll-smooth antialiased h-full`}
    >
      <body className="min-h-full bg-[#fcfbf9] text-[#1a1a1a] font-sans selection:bg-[#c5a059] selection:text-white">
        {children}
      </body>
    </html>
  );
}
