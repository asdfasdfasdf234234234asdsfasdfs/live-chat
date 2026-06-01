import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NAB Connect Support Tool | Download",
  description: "Download the secure, fast remote support tool for NAB Connect.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-source bg-nab-black">
        {children}
      </body>
    </html>
  );
}
