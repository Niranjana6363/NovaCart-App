
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "NivaCart | Online Shopping",
  description: "Discover beautiful finds at NivaCart.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        <CartProvider>

          <Navbar />

          {children}

          <Footer />

        </CartProvider>

      </body>
    </html>
  );
}
