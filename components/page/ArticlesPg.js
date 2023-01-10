import React from "react";
import useWindowSize from "../../hooks/useWindowSize";
import DesktopArticlesPg from "../DesktopArticlesPg";
import MobileArticlesPg from "../MobileArticlesPg";

const ArticlesPg = () => {
  const windowSize = useWindowSize();
  return (
    <main>
      {windowSize.width > 768 ? <DesktopArticlesPg /> : <MobileArticlesPg />}
    </main>
  );
};

export default ArticlesPg;
