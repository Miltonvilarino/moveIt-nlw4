import { ThemesProvider } from "../contexts/ThemeContext";
import GlobalStyle from "../styles/global";

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <ThemesProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemesProvider>
    </>
  );
}

export default MyApp;
