import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MarketSQuare",
  description: "OAU APP STORE",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="night"
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={"flex flex-col min-h-screen relative " + inter.className}
      >
       <Header/>
        <div className="flex-1">{children}</div>
        <footer className="flex items-center flex-wrap justify-center border-t border-solid border-slate-300 p-6" >FOOTER</footer>
        <div id="portal"></div>
      </body>
    </html>
  );
}
