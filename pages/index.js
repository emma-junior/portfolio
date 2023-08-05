import Head from "next/head";
import Projects from "../components/Projects";
import Layout from "../layout/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>emmatechy | Frontend developer</title>
      </Head>
      <Layout home={true}>
        <Projects />
      </Layout>
    </>
  );
}
