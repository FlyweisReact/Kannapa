/** @format */

import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.setItem("mode", null));

  function ToggleTheme() {
    setTheme(theme === 'light-mode' ? 'dark-mode' : 'light');
  }

  return (
    <ThemeContext.Provider
      value={{
        ToggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
