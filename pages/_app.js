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
        {/* BASIC SEO */}
        <title>benarkahmasukpersib.com</title>
        <meta
          name="description"
          content="Analisis rumor transfer Persib Bandung berbasis data, sentimen, dan confidence score. Update top recruit Persib Januari 2026."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* FAVICON */}
        <link rel="icon" href="/persib-outline-logo.svg" />

        {/* OPEN GRAPH (WhatsApp, Facebook, LinkedIn) */}
        <meta property="og:title" content="benarkahmasukpersib.com" />
        <meta
          property="og:description"
          content="Benarkah masuk Persib? Cek di sini kebenaran rumornya!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://benarkahmasukpersib.netlify.app" />
        <meta property="og:image" content="https://benarkahmasukpersib.netlify.app/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="benarkahmasukpersib.com" />
        <meta
          name="twitter:description"
          content="Benarkah masuk Persib? Cek di sini kebenaran rumornya!"
        />
        <meta name="twitter:image" content="https://benarkahmasukpersib.netlify.app/og-image.jpg" />
      </Head>

      <Component {...pageProps} />
    </main>
  );
}
