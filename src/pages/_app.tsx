import "../styles/globals.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "@/theme";
import ClientApp from "../ClientApp";

export default function MyApp() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ClientApp />
    </ThemeProvider>
  );
}