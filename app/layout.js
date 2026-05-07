import { Montserrat, Prata } from "next/font/google";
import "./globals.css";

import Navbar from "./components/layout/header/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat-google",
  weight: ["300", "400", "500", "600", "700"],
});

const prata = Prata({
  subsets: ["latin"],
  variable: "--font-prata-google",
  weight: "400",
});

export const metadata = {
  title: "The Modernest Collection",
  description:
    "The Modernest Collection landing page for its two apartments in Nashville, Tennessee.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${prata.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
