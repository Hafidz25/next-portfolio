import { Sora, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Layouts from "./commons/components/Layouts";
import NextTopLoader from "nextjs-toploader";
import SpotifyTop from "./commons/components/elements/SpotifyTop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Reza | Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body className={sora.className}>
        <Providers>
          <NextTopLoader
            color="#05b6d3"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #05b6d3,0 0 5px #45c6c0"
          />
          <SpotifyTop />
          <Layouts>{children}</Layouts>
        </Providers>
      </body>
    </html>
  );
}
