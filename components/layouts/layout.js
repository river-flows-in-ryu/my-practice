import React from "react";
import Bottom from "./bottom";
import Header from "./header";

import { LayoutBody, Container } from "../../styles/components/layouts/layout";

export default function Layout({ children }) {
    return (
        //
        <Container>
            <Header />
            <LayoutBody>{children}</LayoutBody>
            <Bottom />
        </Container>
    );
}
