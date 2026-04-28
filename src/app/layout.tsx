import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Sussex Inlet Golf Club | 9 Hole Bushland Course",
  description:
    "Play 9 holes surrounded by native Australian bushland at Sussex Inlet Golf Club. Friendly atmosphere, wildlife on course, and visitors always welcome. Book today.",
  keywords: [
    "Sussex Inlet Golf Club",
    "golf course",
    "9 hole golf",
    "Sussex Inlet",
    "NSW golf",
    "Shoalhaven golf",
    "bushland golf",
  ],
  openGraph: {
    title: "Sussex Inlet Golf Club",
    description:
      "Where nature meets the fairway. 9 holes of pure Australian bushland golf.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${playfair.variable} antialiased`}>
        {children}
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  );
}
