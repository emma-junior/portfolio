import React, { useContext, useState } from "react";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {

  const [active, setActive] = useState("Work");


  return (
    <AppContext.Provider value={{ active, setActive }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;