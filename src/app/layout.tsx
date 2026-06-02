import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { LocationSearch } from "@/components/ui/LocationSearch";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";
import { LanguageProvider } from "@/lib/LanguageContext";

export const metadata: Metadata = {
  title: "Waschen Alora Indonesia",
  description: "Complete commercial laundry and cleaning solutions for B2B and B2C sectors. Precision, hygiene, and trust in every service.",
  metadataBase: new URL("https://waschen-alora.com"),
  openGraph: {
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-screen bg-white selection:bg-primary/10 selection:text-primary overflow-x-hidden flex flex-col">
        <LanguageProvider>
          <ScrollToTop />
          <CustomCursor />
          <Navbar />
          {children}
          <Footer />
          <LocationSearch />
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  );
}
