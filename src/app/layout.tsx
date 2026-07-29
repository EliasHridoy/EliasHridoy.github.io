import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elias Hridoy | Senior Software Engineer & System Architect",
  description: "Portfolio of Md. Elias Kanchon (Elias Hridoy) - Senior Software Engineer with 6+ years specializing in .NET Core, Angular, Microservices, SWIFT ISO20022, SignalR, & Azure DevOps.",
  keywords: ["Software Engineer", ".NET Core", "Angular", "Full Stack", "Azure DevOps", "SignalR", "SWIFT ISO20022", "Elias Hridoy", "Chattogram", "Dhaka"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
