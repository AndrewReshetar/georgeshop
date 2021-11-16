import Head from "next/head";
import Header from "../components/Header";
import AsideSocialLinksBar from "../components/AsideSocialLinksBar";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <Head>
        <title>George Reshetar- Official page</title>
        <meta name="author" content="George Reshetar" />
        <meta
          name="keywords"
          content="George Reshetar, pianist, composer, song-writer, jazz, blues, piano, improvisation, composition, musician"
        />
        <meta
          name="description"
          content="George(Yuriy) Reshetar is a Ukrainian composer, jazz pianist, song-writer
          and arranger. Member of National Composer Union of Ukraine. His music
          contains elements of neoclassicism, impressionist tendencies, synthesis
          of jazz with an academic musical culture, stylistic features of Slavic folk
          traditions. He is the author of many works for the symphony orchestra,
          chamber instrumental and piano."
        />
      </Head>
      <Header />
      <AsideSocialLinksBar />
      <Component {...pageProps} />
      <div id="portal"></div>
    </>
  );
}

export default MyApp;
