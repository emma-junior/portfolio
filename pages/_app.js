import "../styles/globals.css";
import AppProvider from "../hooks/context";
import useWindowSize from "../hooks/useWindowSize";
import DesktopLayout from "../components/DesktopLayout";
import MobileLayout from "../components/MobileLayout";

function MyApp({ Component, pageProps }) {
  const windowSize = useWindowSize();
  return (
    <AppProvider>
      {windowSize.width > 768 ? (
        <DesktopLayout>
          <Component {...pageProps} />
        </DesktopLayout>
      ) : (
        <MobileLayout>
          <Component {...pageProps} />
        </MobileLayout>
      )}
    </AppProvider>
  );
}

export default MyApp;
