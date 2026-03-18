import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "QGraph — The Safe, Secure, Deterministic OS for Enterprise AI",
  description:
    "Nine products. One engine. 710K+ lines of production Rust. The infrastructure layer the agentic world has been missing.",
  openGraph: {
    title: "QGraph — Nine Products. One Engine. Code Complete.",
    description: "The safe, secure, deterministic operating system for enterprise AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
