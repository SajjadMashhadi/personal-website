/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { createContext } from "react";

const initialTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : "light";

const ThemeContext = createContext(initialTheme);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};

export { ThemeProvider, useTheme };
