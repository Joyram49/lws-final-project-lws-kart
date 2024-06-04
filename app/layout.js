import Header from "@/components/common/header/Header";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Poppins, Roboto } from "next/font/google";
config.autoAddCss = false;

import CopyRight from "@/components/common/CopyRight";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/navbar/Navbar";
import connectToDatabase from "@/lib/dbConnect";
import "./globals.css";
import AuthProvider from "./provider/AuthProvider";
import CheckoutProvider from "./provider/CheckoutProvider";
import ProductProvider from "./provider/ProductProvider";
import QuantityProvider from "./provider/QuantityProvider";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "LWSKART-Ecommerce Tailwind",
  description: "Ecommerce website for practice to all lws-learner.",
};

export default async function RootLayout({ children }) {
  await connectToDatabase();
  // await syncWithCustomSession();

  return (
    <html lang='en' className={`${poppins.variable} ${roboto.variable}`}>
      <body id='root'>
        <AuthProvider>
          <ProductProvider>
            <QuantityProvider>
              <CheckoutProvider>
                <Header />
                <Navbar />
                {children}
                <Footer />
                <CopyRight />
              </CheckoutProvider>
            </QuantityProvider>
          </ProductProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
