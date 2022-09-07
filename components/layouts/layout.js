import React from "react";
import Bottom from "./bottom";
import Header from "./header";

export default function Layout({ children }) {
    return (
        //
        <>
            <Header />
            {children}
            <Bottom />
        </>
    );
}
