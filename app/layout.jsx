import { Inter } from "next/font/google";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./style/globals.css";
import Ws from "./components/Ws";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tienda de pintura",
  description: "Tienda enfocada en la pintura",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Hero />
        <main className="">{children}</main>
        <Footer />
        <Ws />
        
      </body>
    </html>
  );
}
