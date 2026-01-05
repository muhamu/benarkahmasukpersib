import Head from "next/head";
import { Bebas_Neue } from "next/font/google";
import "../styles/globals.css";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={bebasNeue.variable}>
      <Head>
        <title>benarkahmasukpersib.com</title>

        {/* Favicon */}
        <link rel="icon" href="/persib-outline-logo.svg" />

        {/* Optional: kalau pakai svg */}
        {/* <link rel="icon" type="image/svg+xml" href="/persib-logo.svg" /> */}
      </Head>

      <Component {...pageProps} />
    </main>
  );
}
