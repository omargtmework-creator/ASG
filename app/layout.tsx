import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "ASG Consultancy | شريكك المالي",
  description:
    "ASG Consultancy تقدم حلولاً محاسبية واستشارية احترافية لدعم نمو الأعمال في السوق المصري."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={ibmPlexArabic.className}>{children}</body>
    </html>
  );
}
