import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Header/Navbar";
import AnimationProvider from "@/Provider/AnimationProvider";
import SmoothScroll from "@/Provider/SmoothScrollProvider";
import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./global.css";
import { ThemeProvider } from "@/Provider/ThemeProvider";
import TechCursor from "../../components/nurui/tech-cursor";

const getInter = Inter({
  variable: "--font-intar",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: "400",
});

// SEO Metadata
export const metadata: Metadata = {
  title: "Full-Stack JavaScript Developer (MERN Stack) | CodeWithSaidul",
  icons: {
    icon: "/og-image.jpg",
  },
  description:
    "A passionate Full-Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js). Proficient in building responsive and modern web applications using Next.js and Tailwind CSS. Eager to contribute my skills and grow in a dynamic development role.",
  keywords: [
    "JavaScript developer",
    "React developer",
    "Next.js portfolio",
    "Web developer",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "MERN stack developer",
    "Frontend developer",
    "Tailwind CSS",
    "Firebase",
    "JWT",
    "CodeWithSaidul",
    "Saidul Islam Rana",
  ],
  authors: [
    { name: "Saidul Islam Rana", url: "https://codewithsaidul.vercel.app" },
  ],
  creator: "CodeWithSaidul",
  openGraph: {
    title: "Full-Stack JavaScript Developer (MERN Stack) | CodeWithSaidul",
    description:
      "A passionate Full-Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js). Proficient in building responsive and modern web applications using Next.js and Tailwind CSS. Eager to contribute my skills and grow in a dynamic development role.",
    url: "https://codewithsaidul.vercel.app",
    siteName: "CodeWithSaidul Portfolio",
    images: [
      {
        url: "https://codewithsaidul.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CodeWithSaidul Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Full-Stack JavaScript Developer (MERN Stack) | CodeWithSaidul",
    description:
      "A passionate Full-Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js). Proficient in building responsive and modern web applications using Next.js and Tailwind CSS. Eager to contribute my skills and grow in a dynamic development role.",
    creator: "@codewithsaidul",
    images: ["https://codewithsaidul.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${getInter.variable} ${dmSerif.variable} relative antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AnimationProvider>
            <SmoothScroll>
              <Navbar />
              {children}
              <Footer />
              <Toaster position="top-center" />
              <TechCursor />
            </SmoothScroll>
          </AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
