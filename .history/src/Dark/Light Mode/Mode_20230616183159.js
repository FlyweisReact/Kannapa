/** @format */

import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(localStorage.setItem);

  return (
    <MyContext.Provider
      value={{
        darkTheme,
        setDarkTheme,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
