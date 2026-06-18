import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sussex Inlet Golf Club | 9 Hole Bushland Course & Venue Hire",
  description:
    "Play 9 holes surrounded by native Australian bushland at Sussex Inlet Golf Club. Social golf events, birthday parties, venue hire, and visitors always welcome. Book today.",
  keywords: [
    "Sussex Inlet Golf Club",
    "golf course",
    "9 hole golf",
    "Sussex Inlet",
    "NSW golf",
    "Shoalhaven golf",
    "bushland golf",
    "venue hire",
    "social golf",
    "birthday party venue",
    "corporate golf",
  ],
  openGraph: {
    title: "Sussex Inlet Golf Club",
    description:
      "Where nature meets the fairway. 9 holes of pure Australian bushland golf. Social events, venue hire & visitors welcome.",
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
      <body className={`${outfit.variable} antialiased`}>
        {children}
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  );
}
