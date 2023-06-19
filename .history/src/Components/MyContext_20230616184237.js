/** @format */

import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme' ));

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
