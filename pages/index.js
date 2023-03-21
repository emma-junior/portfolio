import useWindowSize from "../hooks/useWindowSize";
import MobileHomeContent from "../components/MobileHomeContent";
import Projects from "../components/Projects";

export default function Home() {
  const windowSize = useWindowSize();
  return (
    <div>{windowSize.width > 768 ? <Projects /> : <MobileHomeContent />}</div>
  );
}
