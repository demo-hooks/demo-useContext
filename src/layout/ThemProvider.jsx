import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const valueTheme = {
    theme,
    handleClick,
  };

  return (
    <ThemeContext.Provider value={valueTheme}>{children}</ThemeContext.Provider>
  );
}

export default ThemProvider;
