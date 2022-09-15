import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

import { ThemeProvider } from "styled-components";
import { THEME } from "../styles/theme";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    const getLayout = Component.getLayout || ((page) => page);
    return (
        <ThemeProvider theme={THEME}>
            <SessionProvider session={session}>
                {getLayout(<Component {...pageProps} />)}
            </SessionProvider>
        </ThemeProvider>
    );
}

export default MyApp;
