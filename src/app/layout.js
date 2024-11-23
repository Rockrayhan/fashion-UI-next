import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: {
    default: " Fashion UI ",
    template: "%s | Fashion UI ",
  },
  description: "E-commerce Fashion website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/icons/fixing.jpg" type="image/jpg" />
      </head>

      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
