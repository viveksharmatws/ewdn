import Navbar from "@/components/Navbar";
import "./globals.css";
import { Jost } from "next/font/google";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const Josty = Jost({
  subsets: ["latin"],
});

export const metadata = {
  title: "Ecommerce Website",
  description: "Developed by Yashpreet Rana",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Josty.className}>
        <div className="select-none pointer-events-auto">
          <Navbar />
          {children}
          <Toaster />
          <Footer />
        </div>
      </body>
    </html>
  );
}
