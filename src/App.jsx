import {} from "react";
import { BrowserRouter } from "react-router-dom";
import ApiContextProvider from "./contexts/ApiContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import Routes from "./Routes";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <ApiContextProvider>
          <>
            <Routes />
          </>
        </ApiContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}
