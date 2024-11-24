import "./globals.css";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";


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
