import type { Metadata } from "next";
import { Instrument_Sans, Cormorant_Garamond } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Sussex Inlet Golf Club | 9-hole bushland course, NSW South Coast",
  description:
    "A 9-hole, par 64 course cut through native bushland on the NSW South Coast. Playing since 1953. Open seven days, clubs and carts for hire, visitors welcome.",
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
      "Where nature meets the fairway. Nine holes through native bushland at Sussex Inlet, on the NSW South Coast. Visitors always welcome.",
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
      <body className={`${instrumentSans.variable} ${cormorant.variable} antialiased`}>
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              borderRadius: 0,
              background: '#0a1628',
              color: '#faf9f7',
              border: '1px solid rgba(250,249,247,0.2)',
              boxShadow: 'none',
            },
          }}
        />
      </body>
    </html>
  );
}
