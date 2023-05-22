import useWindowSize from "../hooks/useWindowSize";
import Projects from "../components/Projects";
import Layout from "../layout/Layout";

export default function Home() {
  return (
    <Layout home={true} active="work">
      <Projects />
    </Layout>
  );
}
