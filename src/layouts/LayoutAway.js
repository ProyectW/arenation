import React from "react";
import NavBar from "../components/NavBar";

export default function LayoutAway(props) {
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
