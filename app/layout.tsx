import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "YMT Lion Dance",
  description: "Official website of YMT Lion Dance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden bg-gradient-to-b from-[#090909] to-[#000] min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
