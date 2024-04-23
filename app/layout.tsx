import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "./_components/Navbar";
import BackTop from "./_components/BackTop";

const inter = Poppins({weight:["400","700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diary App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="!scroll-smooth">
        <body className={`mb-6 ${inter.className}`}>
        <Navbar />
        {children}
        <BackTop />
        </body>
      </html>
    </ClerkProvider>
    
  );
}
