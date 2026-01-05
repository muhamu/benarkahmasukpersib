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
  {/* ================= BASIC SEO ================= */}
  <title>Benarkah Masuk Persib? </title>
  <meta
    name="description"
    content="Benarkah Masuk Persib? Cek dahulu kabarnya secara real-time."
  />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  {/* ================= FAVICON ================= */}
  <link rel="icon" type="image/svg+xml" href="/persib-outline-logo.svg" />
  <link rel="apple-touch-icon" href="/persib-outline-logo.svg" />

  {/* ================= OPEN GRAPH (WA, IG, FB, LinkedIn) ================= */}
  <meta property="og:title" content="Benarkah Masuk Persib?" />
  <meta
    property="og:description"
    content="Benarkah Masuk Persib? Cek dahulu kabarnya secara real-time."
  />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Benarkah Masuk Persib" />
  <meta property="og:url" content="https://benarkahmasukpersib.netlify.app" />

  <meta
    property="og:image"
    content="https://benarkahmasukpersib.netlify.app/thumbnail.jpg"
  />
  <meta property="og:image:secure_url" content="https://benarkahmasukpersib.netlify.app/thumbnail.jpg" />
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Benarkah Masuk Persib? Cek dahulu kabarnya secara real-time." />

  {/* ================= TWITTER / X ================= */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Benarkah Masuk Persib?" />
  <meta
    name="twitter:description"
    content="Benarkah Masuk Persib? Cek dahulu kabarnya secara real-time."
  />
  <meta
    name="twitter:image"
    content="https://benarkahmasukpersib.netlify.app/thumbnail.jpg"
  />
</Head>


      <Component {...pageProps} />
    </main>
  );
}
