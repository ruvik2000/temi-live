import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/static/header/header";
import { inter } from "./fonts";
import Footer from "@/components/static/footer/footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  metadataBase: new URL("https://temi.au/"),
  title: "temi Robot: Enhancing Healthcare and Services",
  description:
    "temi: The service robot for telepresence consultations and customer engagement, redefining interaction in healthcare and beyond.",
  robots: "index, follow",
  publisher: "Netlify",
  creator: "codecrafters",
  applicationName: "temi",
  authors: [
    { name: "codecrafters", url: "https://codecrafters.bar/" },
    { name: "codecrafters", url: "https://codecrafters.lk/" },
  ],
  openGraph: {
    title: "temi Robot: Enhancing Healthcare and Services",
    description:
      "temi: The service robot for telepresence consultations and customer engagement, redefining interaction in healthcare and beyond.",
    siteName: "temi",
    type: "website",
    images: "/temi.png",
    url: "/",
  },
  twitter: {
    images: "/temi.png",
    card: "summary_large_image",
    title: "temi Robot: Enhancing Healthcare and Services",
    description:
      "temi: The service robot for telepresence consultations and customer engagement, redefining interaction in healthcare and beyond.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <Header />
        {children}
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
