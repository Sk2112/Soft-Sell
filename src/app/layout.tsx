import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SoftSell – Resell Your Unused Software Licenses",
  description: "Turn your unused software licenses into money quickly and securely with SoftSell.",
  keywords: ["SoftSell", "sell software licenses", "license resale", "unused software", "digital assets"],
  icons: {
    icon: "/Logo/icons8-logo-64.png",
  },
  authors: [{ name: "SoftSell Team" }],
  creator: "SoftSell",

  openGraph: {
    title: "SoftSell – Resell Your Unused Software Licenses",
    description: "SoftSell helps you sell unused software licenses and get paid fast.",
    url: "https://softsell.vercel.app", 
    siteName: "SoftSell",
    images: [
      {
        url: "/Logo/icons8-logo-64.png", 
        width: 800,
        height: 600,
        alt: "SoftSell Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SoftSell – Resell Your Unused Software Licenses",
    description: "Turn your unused licenses into money — fast and easy with SoftSell.",
    images: ["/Logo/icons8-logo-64.png"],
    creator: "@softsell", 
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
