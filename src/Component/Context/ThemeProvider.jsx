import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const getStoredTheme = () => localStorage.getItem("theme") || "";

const darkmode = (theme) => {
  const previousTheme = localStorage.getItem("theme");
  if (previousTheme) {
    document.documentElement.classList.remove(previousTheme);
  }
  if (theme) {
    document.documentElement.classList.toggle(theme);
    localStorage.setItem("theme", theme);
  } 
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getStoredTheme);

  useEffect(() => {
    darkmode(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
