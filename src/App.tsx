import styles from "./App.module.scss";
import SearchForm from "./pages/SearchForm";
import { CompanyContextProvider } from "./context";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./assets/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CompanyContextProvider>
        <div className={styles.app}>
          <SearchForm />
        </div>
      </CompanyContextProvider>
    </ThemeProvider>
  );
}

export default App;
