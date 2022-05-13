import { createContext, useContext } from "react";
import { ThemeProvider } from "styled-components";
import useLocalStorage from "../hooks/useLocalStorage";
import { GlobalStyles } from "../styles/GlobalStyles";
import { lightTheme, darkTheme } from "../styles/ThemeStyles";

const ThemeContext = createContext();
export const useThemeContext = () => useContext(ThemeContext);

export default function ThemeContextProvider({ children }) {
  const [isLight, setIsLight] = useLocalStorage("light-theme", true);

  const theme = isLight ? lightTheme : darkTheme;

  const toggleTheme = () => setIsLight(!isLight);

  return (
    <ThemeContext.Provider value={{ isLight, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
