import { BrowserRouter, Route, Routes } from "react-router-dom";

import styles from "./App.module.scss";
import SearchForm from "./pages/SearchForm";
import { CompanyContextProvider } from "./context";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./assets/theme";
import Map from "./pages/Map";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CompanyContextProvider>
        <div className={styles.app}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<SearchForm />} />
              <Route path="map" element={<Map />} />
            </Routes>
          </BrowserRouter>
        </div>
      </CompanyContextProvider>
    </ThemeProvider>
  );
}

export default App;
