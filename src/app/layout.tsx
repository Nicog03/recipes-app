import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "../../providers/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travel App",
  description:
    "An application that allows the user to browse and check different points of interests around the world.",
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
