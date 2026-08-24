import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata = {
  title: "Feed Tôi",
  description:
    "Trang nuôi tôi phiên bản Next.js, tối ưu deploy Vercel và dùng QR cục bộ thay cho link donate hỏng.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}
