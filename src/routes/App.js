import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import LayoutAway from "../layouts/LayoutAway";
import Arenas from "../pages/Arenas";

const App = () => (
    <BrowserRouter>
        <LayoutAway>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/arenas" component={Arenas} />
            </Switch>
        </LayoutAway>
    </BrowserRouter>
);

export default App;
