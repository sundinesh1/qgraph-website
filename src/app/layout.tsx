import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "QGraph - The Graph Engine for Everything",
  description:
    "One unified platform for graphs, vectors, time-series, spatial data, and AI. Sub-microsecond queries at petabyte scale.",
  openGraph: {
    title: "QGraph - The Graph Engine for Everything",
    description: "Sub-microsecond queries. Petabyte scale. One engine.",
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
