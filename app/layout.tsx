import "./globals.css";
import type { Metadata } from "next";
import { UserProvider } from "@/context/User";
import { Geist, Geist_Mono } from "next/font/google";
import { RestrictionProvider } from "@/context/Restriction";
import { meta } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: meta.siteTitle,
    template: `${meta.siteTitle} | %s `,
  },
  description: meta.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <UserProvider>
          {/* <RestrictionProvider> */}
          {children}
          s          {/* </RestrictionProvider> */}
        </UserProvider>
      </body>
    </html>
  );
}
