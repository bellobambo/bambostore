import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

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
        <header className="sticky top-0 p-6 bg-gray-500 border-6 border-solid border-blue-900 shadow-md z-50 text-2xl sm:text-3xl md:text-4xl sm:p-8 flex items-center justify-between">
          <Link href="/">
            <h1 className="cursor-pointer hover:scale-110">MarketSQuare</h1>
          </Link>
          <i className="cursor-pointer hover:text-slate-900 fa-solid fa-cart-shopping"></i>
        </header>
        <div className="flex-1">{children}</div>
        <footer>FOOTER</footer>
      </body>
    </html>
  );
}
