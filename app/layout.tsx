import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ethereum Ho Chi Minh City Community",
  description: "Ethereum Ho Chi Minh City Community - Ethereum Vietnam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${oswald.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
