/** @format */

import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(localStorage.setItem("mode" , null));

  function ToggleTheme () {
    set
  }

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
