import React from "react";
import NavBar from "./NavBar";

export default function Layout(props) {
    return (
        <>
            <NavBar isLog={true} />
            {props.children}
        </>
    );
}
