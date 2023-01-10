import React from "react";
import useWindowSize from "../../hooks/useWindowSize";
import DesktopResumePg from "../DesktopResumePg";
import MobileResumePg from "../MobileResumePg";

const ResumePg = () => {
  const windowSize = useWindowSize();
  return (
    <main>
      {windowSize.width > 768 ? <DesktopResumePg /> : <MobileResumePg />}
    </main>
  );
};

export default ResumePg;
