import Head from "next/head";
import Projects from "../components/Projects";
import Layout from "../layout/Layout";

const work = () => {
  return (
    <>
      <Head>
        <title>Frontend developer | Works</title>
      </Head>
      <Layout>
        <Projects />
      </Layout>
    </>
  );
};

export default work;
