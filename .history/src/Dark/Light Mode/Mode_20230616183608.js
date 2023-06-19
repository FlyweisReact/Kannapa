/** @format */

import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(localStorage.setItem("mode" , null));

  const 

  return (
    <ThemeContext.Provider
      value={{
        darkTheme,
        setDarkTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
