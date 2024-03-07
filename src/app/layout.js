import { Sora, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Layouts from "./commons/components/Layouts";
import SpotifyTop from "./commons/components/elements/SpotifyTop";
import TopLoader from "./commons/components/elements/TopLoader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Home | Hafidz",
  description: "Personal website, portfolio, roadmap, and more",
  keywords:
    "Hafidz ,Portfolio,Hafidz Portfolio,Hafidz, Hafidz Portfolio",
  creator: "Hafidz Alif R.",
  openGraph: {
    title: "Hafidz - Personal Website",
    description:
      "Personal website, portfolio, roadmap, and more of Hafidz",
    url: "#",
    siteName: "Hafidz",
    images: [
      {
        url: "https://res.cloudinary.com/dxgsqxdi3/image/upload/f_auto,q_auto/ohc78qqittlujanfbobr",
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  profile:
    "https://res.cloudinary.com/dxgsqxdi3/image/upload/f_auto,q_auto/ohc78qqittlujanfbobr",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className="light">
      {/* <link
        rel="icon"
        href="./?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      /> */}
      <body className={sora.className}>
        <Providers>
          {/* <SpotifyTop /> */}
          <TopLoader />
          <Layouts>{children}</Layouts>
        </Providers>
      </body>
    </html>
  );
}
