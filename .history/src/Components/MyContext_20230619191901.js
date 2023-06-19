/** @format */

import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") === "" ? "light" : localStorage.getItem("theme") );
  const themeClass =  theme === 'light' ? 'light-mode' : 'dark-mode'

  return (
    <MyContext.Provider
      value={{
        theme,
        setTheme,
        themeClass
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
