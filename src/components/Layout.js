import React from "react";
import NavBar from "./NavBar";

export default function Layout(props) {
    return (
        <>
            <NavBar
                isLog={true}
                isLocal={true}
                isAway={false}
                openManager={true}
            />
            {props.children}
        </>
    );
}
