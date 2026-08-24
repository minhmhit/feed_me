import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata = {
  title: "Nuôi Khầy - Feed Sensei",
  description:
    "Feed me bro!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={spaceGrotesk.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
