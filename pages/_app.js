import { useEffect } from "react";
import "../styles/globals.css";
import AppProvider from "../hooks/context";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/atom-one-dark.css";

hljs.registerLanguage("javascript", javascript);

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      hljs.initHighlightingOnLoad();
    }
  }, []);
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
