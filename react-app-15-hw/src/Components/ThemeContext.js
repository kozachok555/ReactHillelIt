import { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isLightMode, setLightMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("dark-theme", !isLightMode);
  }, [isLightMode]);

  const toggleTheme = () => {
    setLightMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isLightMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
