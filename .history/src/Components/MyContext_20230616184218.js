/** @format */

import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [myState, setMyState] = useState(false);
  const [secondTab, setSecondState] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <MyContext.Provider
      value={{
        myState,
        setMyState,
        secondTab,
        setSecondState,
        darkTheme,
        setDarkTheme,
        historicalData,
        setHistoricalData,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
