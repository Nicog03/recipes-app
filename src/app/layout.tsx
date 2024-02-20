import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "../../providers/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recipes App",
  description:
    "An application in which the user can browse and check different types of dishes as well as its required ingredients and recipes for preparation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <div className="sm:text-lg xl:max-w-[1426px] 2xl:max-w-[1526px] mx-auto">
            {children}
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
