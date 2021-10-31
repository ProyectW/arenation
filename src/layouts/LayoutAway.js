import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function LayoutAway(props) {
    return (
        <>
            <NavBar
                isLog={false}
                isLocal={false}
                isAway={false}
                openManager={false}
            />
            <main>{props.children}</main>
            <Footer footer="UnLocal" />
        </>
    );
}
