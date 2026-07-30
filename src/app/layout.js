import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Nay Menu",
  description: "Nay Menu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${hanken.className}`}>
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
