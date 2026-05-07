import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "The Modernest Collection",
  description:
    "The Modernest Collections landing page for their two aparments in Nashville, Tennessee.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
