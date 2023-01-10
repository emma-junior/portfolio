import Head from "next/head";
import HomePg from "../components/HomePg";
import MobileHomePg from "../components/MobileHomePg";
import useWindowSize from "../hooks/useWindowSize";

export default function Home() {
  const windowSize = useWindowSize();
  return (
    <div>
      <Head>
        <title>emmatechy | Frontend developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{windowSize.width > 768 ? <HomePg /> : <MobileHomePg />}</main>
    </div>
  );
}
