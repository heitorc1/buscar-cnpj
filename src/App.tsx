import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Wrapper } from "./App.styles";
import SearchForm from "pages/SearchForm/SearchForm";
import { CompanyContextProvider } from "context";

import { ThemeProvider } from "@mui/material/styles";
import theme from "assets/theme";
import { Map } from "pages/Map/Map";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CompanyContextProvider>
        <Wrapper>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<SearchForm />} />
              <Route path="map" element={<Map />} />
            </Routes>
          </BrowserRouter>
        </Wrapper>
      </CompanyContextProvider>
    </ThemeProvider>
  );
}

export default App;
