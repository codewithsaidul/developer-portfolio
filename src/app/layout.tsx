import Navbar from "@/components/Header/Navbar";
import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

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
  title: "JavaScript Web Developer | React, Next.js, Node.js, MongoDB",
  icons: {
    icon: "/og-image.jpg",
  },
  description:
    "I'm a JavaScript-based web developer skilled in React, Next.js, Tailwind CSS, and backend tools like Node.js and MongoDB. I also have a solid understanding of programming fundamentals like variables, conditions, loops, arrays, and functions.",
  keywords: [
    "JavaScript developer",
    "React developer",
    "Next.js portfolio",
    "Web developer",
    "Node.js",
    "MongoDB",
    "MERN stack developer",
    "Frontend developer",
    "Tailwind CSS",
    "Firebase",
    "JWT",
    "CodeWithSaidul",
    "Saidul Islam Rana",
  ],
  authors: [{ name: "Saidul Islam Rana", url: "http://localhost:3000" }],
  creator: "CodeWithSaidul",
  openGraph: {
    title: "JavaScript Web Developer | React, Next.js, Node.js, MongoDB",
    description:
      "Experienced JavaScript web developer focusing on React, Next.js, Tailwind, Node.js & MongoDB. Passionate about building responsive, high-performance web apps.",
    url: "https://yourdomain.com",
    siteName: "CodeWithSaidul Portfolio",
    images: [
      {
        url: "http://localhost:3000/og-image.jpg",
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
    title: "JavaScript Web Developer | React, Next.js, Node.js, MongoDB",
    description:
      "JavaScript web developer specializing in frontend with React & backend with Node.js. Explore my latest projects and skills.",
    creator: "@codewithsaidul",
    images: ["http://localhost:3000/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${getInter.variable} ${dmSerif.variable} relative antialiased`}>
        {/* ================ bg blur ==================== */}
       <div>
          <div
            className={
              "absolute left-0  w-[300px] h-[400px] min-[830px]:w-[400px] bg-white opacity-10 blur-3xl lg:-top-[100px]"
            }
          />
          <div
            className={
              "absolute right-0  w-[300px] h-[400px] bg-white opacity-10 blur-3xl top-60"
            }
          />
       </div>
       {/* ================ bg blur ==================== */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
