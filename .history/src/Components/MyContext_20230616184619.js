/** @format */

import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.setItem("theme"));

  return (
    <MyContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
