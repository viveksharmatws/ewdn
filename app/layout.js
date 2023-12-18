import Navbar from "@/components/Navbar";
import "./globals.css";
import { Jost } from "next/font/google";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
const Josty = Jost({
  subsets: ["latin"],
});

export const metadata = {
  title: "Ecommerce Webiste",
  description: "Developed by Yashpreet Rana",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Josty.className}>
        <div>
          <Navbar />
          {children}
          <Toaster />
          <Footer />
        </div>
      </body>
    </html>
  );
}
