import styles from "./App.module.scss";
import SearchForm from "./pages/SearchForm";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./assets/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.app}>
        <SearchForm />
      </div>
    </ThemeProvider>
  );
}

export default App;
