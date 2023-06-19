/** @format */

import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <MyContext.Provider
      value={{
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
