import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { navigationLinks } from "@/constants/navigation";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leafclutch Technologies",
  description:
    "Leafclutch Technologies is an IT and software company in Bhairahawa (Siddharthanagar), Nepal — custom software development, websites, mobile apps, SaaS products, digital marketing, SEO and professional IT training.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background">
        <Header navigationLinks={navigationLinks} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
