import type { Metadata, Viewport } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import ClientLayout from "./client-layout";

const exo = Exo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-exo",
});

export const metadata: Metadata = {
  title: "OG Customs – Premium Car Customization & Modification Services in Kokrajhar, Assam",
  description:
    "OG Customs is Kokrajhar, Assam's premier car customization and modification studio. We specialize in PPF, ceramic coating, body facelifts, 4x4 off-roading builds, denting, painting, detailing, and performance upgrades. Transform your ride with OG Customs.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${exo.variable} min-h-screen bg-[#0a0a0a] font-sans text-white antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
