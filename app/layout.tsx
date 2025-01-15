import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Hens MSN - Framework Developer",
  description: "Professional framework developer specializing in Kontas Framework",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${lora.variable} font-sans text-white`}>
        {children}
      </body>
    </html>
  );
}
