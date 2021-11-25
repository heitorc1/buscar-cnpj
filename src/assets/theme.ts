import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#6bb99e",
      main: "#3a8970",
      dark: "#005b45",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ffffff",
      main: "#ffffff",
      dark: "#cccccc",
      contrastText: "#000",
    },
  },
  typography: {
    h1: {
      // titulo
      fontSize: 60,
    },
    h2: {
      // texto de botão
      fontSize: 20,
      fontWeight: 500,
    },
    h3: {
      // textos
      fontSize: 20,
    },
    h4: {
      // textos nos card
      fontSize: 16,
    },
  },
});

export default theme;
