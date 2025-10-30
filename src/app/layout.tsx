import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Mahalakshmi Poultry Complex",
  description:
    "Showcase website highlighting Mahalakshmi Poultry Complex's journey, farms, and commitment to pure white eggs.",
  metadataBase: new URL("https://mahalakshmi-poultry.example.com"),
  openGraph: {
    title: "Mahalakshmi Poultry Complex",
    description:
      "Discover our 5 lakh daily white-egg production, quality assurance, and expansive South India reach.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahalakshmi Poultry Complex",
    description:
      "Leading white-egg producers from Andhra Pradesh with 5 lakh eggs daily and pan-South reach.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} bg-[var(--background)] font-sans antialiased text-[var(--foreground)]`}>
        <SiteHeader />
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
