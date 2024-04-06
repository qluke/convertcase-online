import { Rubik } from "next/font/google";
import { Providers } from "@/components/providers";
import { i18n } from "@/i18n/i18n-config";
import "./globals.css";
import GoogleAnalytics from "../GoogleAnalytics";
import Favicon from "/public/favicon.ico";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const metadata = {
  title: "Convert Case Online",
  description:
    "Easily convert text to different case formats online: lowercase, UPPERCASE, sentence case, capitalized case, and more.  ",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({ children, params }) {
  return (
    <html
      lang={params.lang}
      data-theme="dark"
      style={{ "colorScheme?": "dark" }}
    >
      <body className={rubik.variable} suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
        {process.env.NODE_ENV === "development" ? (
          <></>
        ) : (
          <>
            <GoogleAnalytics />
          </>
        )}
      </body>
    </html>
  );
}
