import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import Arenas from "../pages/Arenas";

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/arenas" component={Arenas} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;
