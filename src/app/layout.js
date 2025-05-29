import "./globals.css";
import { Montserrat, Syne } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700"],
  style: ["normal"],
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  style: ["normal"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          "--font-montserrat": montserrat.style.fontFamily,
          "--font-syne": syne.style.fontFamily,
        }}
        className="antialiased bg-background"
      >
        {children}
      </body>
    </html>
  );
}
