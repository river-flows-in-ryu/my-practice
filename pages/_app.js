import "../styles/globals.css";

import { ThemeProvider } from "styled-components";
import { THEME } from "../styles/theme";

function MyApp({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page);
    return (
        <ThemeProvider theme={THEME}>
            {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
    );
}

export default MyApp;
