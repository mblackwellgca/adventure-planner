import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00B6C3",
      contrastText: "#133042",
      light: "#36f1cd",
    },
    secondary: {
      main: "#6B3567",
      contrastText: "#ffffff",
      dark: "#50284d",
      extraLight: "#F8F1F8",
      light: "#bc76b7",
    },
  },
});

export default theme;
