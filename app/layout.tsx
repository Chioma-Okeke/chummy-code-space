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
  description: "Welcome to Chummy’s Code Space! I am Chioma Okeke, a Full-Stack Engineer creating accessible and secure web applications that blend innovation, usability, and trust.",
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
    "Python",
    "Django",
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "GraphQL",
    "SQL",
    "C++",
    "MongoDB",
    "Web Development",
    "Responsive Design",
    "Object-oriented programming",
    "Data Structure and Algorithm"
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chummy-code-space.vercel.app/',
    siteName: 'Chioma Okeke',
    title: 'Chioma Okeke',
    description:
      "Welcome to Chummy’s Code Space! I am Chioma Okeke, a Full-Stack Engineer creating accessible and secure web applications that blend innovation, usability, and trust.",
    images: [
      {
        url: "https://res.cloudinary.com/djrp3aaq9/image/upload/v1758915248/WhatsApp_Image_2025-09-13_at_00.35.40_6d6eeac2_pndl8i.jpg",
        width: 1200,
        height: 630,
        alt: 'Chioma Okeke Banner Image',
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
