import React, { useContext, useState } from "react";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {

  const [active, setActive] = useState("Work");
  const [dropdown, setDropdown] = useState(false)

  return (
    <AppContext.Provider value={{ active, setActive, dropdown, setDropdown }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;