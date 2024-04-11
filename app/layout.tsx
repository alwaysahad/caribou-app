import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import Header from "@/components/Header";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Caribou",
  description: "Caribou is a simple, fast, and reliable static site generator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
     <html lang="en">
       <body className={inter.className}>
       <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
       >
         <Header />
         {children}
         <Toaster />
      </ThemeProvider>

       </body>
     </html>
   </ClerkProvider>
  );
}
