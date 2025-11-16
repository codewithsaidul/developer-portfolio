import Footer from "@/components/Footer/Footer";
import GoogleAnalytics from "@/components/GooleAnalytics/GoogleAnalytics";
import Navbar from "@/components/Header/Navbar";
import { getPortfolioSchema } from "@/lib/getPortfolioSchema";
import AnalyticsProvider from "@/Provider/AnalyaticProvider";
import AnimationProvider from "@/Provider/AnimationProvider";
import SmoothScroll from "@/Provider/SmoothScrollProvider";
import { ThemeProvider } from "@/Provider/ThemeProvider";
import LoadingAnimationWrapper from "@/wrapper/LoadingAnimationWrapper";
import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import TechCursor from "../../components/nurui/tech-cursor";
import "./global.css";

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
  verification: {
    google: "JHNtCukuwx2jgIKQeUOapUbqCamQkkWj5-7fUjWckbw"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getPortfolioSchema();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <GoogleAnalytics trackingId="G-G3MPRDKP75" />
        {/* AnalyticsProvider to track route changes */}
        <Suspense fallback={null}>
          <AnalyticsProvider trackingId="G-G3MPRDKP75" />
        </Suspense>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
      </head>
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
              <LoadingAnimationWrapper>
                <Navbar />
                {children}
                <Footer />
                <Toaster position="top-center" />
                <TechCursor />
              </LoadingAnimationWrapper>
            </SmoothScroll>
          </AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
