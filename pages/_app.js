import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import "../styles/globals.css";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
