import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
  description: "Chummy's code space. Chioma Okeke is a Full-stack Software Engineer focused on building inclusive and secured software applications.",
  authors: [
    {
      name: "Chioma Okeke",
      url: "https://chummy-code-space.vercel.app/"
    }
  ],
  keywords: [
    'Frontend Engineering',
    'Backend Engineering',
    'Full-stack Development',
    'Software security',
    'React.js',
    'Next.js',
    "JavaScript",
    "TypeScript",
    "Object-oriented programming",
    "Data Structure and Algorithm"
  ],
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://chummy-code-space.vercel.app/',
    siteName: 'Tolce Learning Hub',
    title: 'Tolce Learning Hub',
    description:
      "Chummy's code space. Chioma Okeke is a Full-stack Software Engineer focused on building inclusive and secured software applications. Open to learn more about her journey",
    images: [
      {
        url: "https://res.cloudinary.com/djrp3aaq9/image/upload/v1758915248/WhatsApp_Image_2025-09-13_at_00.35.40_6d6eeac2_pndl8i.jpg",
        width: 1200,
        height: 630,
        alt: 'Chioma Okeke',
      },
    ],
  },

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
