import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmed Badran's Portfolio",
  description: "Ahmed Mohamed Badran portfolio for show own skills, https://linkedin.com/in/ahmedbadran72/",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-800`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
