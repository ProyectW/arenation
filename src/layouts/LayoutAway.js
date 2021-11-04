import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function LayoutAway(props) {
    return (
        <>
            <NavBar
                isLog={true}
                isLocal={false}
                isAway={true}
                openManager={false}
            />
            <main>{props.children}</main>
            <Footer footer="UnLocal" />
        </>
    );
}
