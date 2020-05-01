import React from "react";
import "../styles/reset.scss";

export default function ({Component, pageProps}) {
    return (
        <Component {...pageProps}/>
);
};