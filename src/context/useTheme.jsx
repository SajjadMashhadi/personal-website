/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { createContext } from "react";

const initialTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : "dark";

const initialLang = localStorage.getItem("lang")
  ? localStorage.getItem("lang")
  : "en";

const AppContext = createContext({ initialLang, initialTheme });

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme);
  const [lang, setLang] = useState(initialLang);

  return (
    <AppContext.Provider value={{ theme, setTheme, lang, setLang }}>
      {children}
    </AppContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(AppContext);
  return context;
};

export { ThemeProvider, useTheme };
