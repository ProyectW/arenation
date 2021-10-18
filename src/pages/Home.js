import React from "react";
import Footer from "../components/Footer";

export default class Home extends React.Component {
    render() {
        return (
            <>
                <img
                    src={
                        "https://images.unsplash.com/photo-1531861184681-f2de7dd72da5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                    }
                    alt=""
                    className="max-h-screen w-full object-cover"
                />
                <Footer />
            </>
        );
    }
}
