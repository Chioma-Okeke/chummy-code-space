import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/shared/back-to-top";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chioma Okeke",
  description: "Chummy's code space. Learn more about Chioma Okeke",
  authors: [
    {
      name: "Chioma Okeke",
      url: "https://tolce-learning-hub.vercel.app/"
    }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster richColors expand={true} position="top-right" />
        {children}
        {/* <BackToTop /> */}
      </body>
    </html>
  );
}
