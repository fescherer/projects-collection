import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { PropsWithChildren } from "react";
import { Header } from "@/components/header.component";
import { Footer } from "@/components/footer.component";
import Tailwind from '@/../tailwind.config'
import { cookies } from "next/headers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Fennec Tales Studio Project Collection",
  description: "Generated by create next app",
};

export default function RootLayout({ children,}: Readonly<PropsWithChildren>) {
  const theme = Tailwind.daisyui.themes
  const themeCookie = cookies().get('theme')
  const currentTheme = themeCookie ? themeCookie.value : theme[0]

  return (
    <html lang="en" data-theme={currentTheme}>
      <body className={`${geistSans.variable} ${geistMono.variable} custom-background flex size-full min-h-screen flex-col antialiased`}>
        <Header />
        <main className="flex min-h-full flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
