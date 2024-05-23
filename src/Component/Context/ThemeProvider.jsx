import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const getStoredTheme = () => localStorage.getItem("theme") || "";
const setStoredTheme = (theme) => localStorage.setItem("theme", theme);

const applyTheme = (theme) => {
  if (theme === "dark") {
    
    document.body.classList.add("bg-slate-800", "text-white");
    document.documentElement.classList.add("dark")
    document.body.classList.remove("bg-white", "text-black");
    
  } else {
    document.body.classList.add("bg-white", "text-black");
    document.documentElement.classList.remove("dark")
    document.body.classList.remove("bg-slate-800", "text-white");
    
  }
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getStoredTheme);

  useEffect(() => {
    setStoredTheme(theme);
    applyTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
 
      {children}
    </ThemeContext.Provider>
  );
};
