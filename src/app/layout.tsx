import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Transition } from "@/components/Transition";
import { Stairs } from "@/components/Stairs";
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Kevin's Portfolio",
  description: "A portfolio website showcasing my work and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <Header />
        <Stairs />
        <Transition>{children}</Transition>
      </body>
    </html>
  );
}
