import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import LayoutAway from "../layouts/LayoutAway";
import Arenas from "../pages/Arenas";
import SelectedArena from "../pages/SelectedArena";
import ArenaFavorite from "../pages/ArenaFavorite";
import Account from "../pages/Account";
import Notifications from "../pages/Notifications";
import Bookings from "../pages/Bookings";

const App = () => (
  <BrowserRouter>
    <LayoutAway>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/arenas" component={Arenas} />
        <Route exact path="/account">
          <Account type="cuenta" />
        </Route>
        <Route exact path="/account/seguridad">
          <Account type="seguridad" />
        </Route>
        <Route exact path="/account/informacion">
          <Account type="info" />
        </Route>
        <Route exact path="/arenas/selected" component={SelectedArena} />
        <Route exact path="/arenas/favorites" component={ArenaFavorite} />
        <Route exact path="/notifications" component={Notifications} />
        <Route exact path="/bookings" component={Bookings} />
      </Switch>
    </LayoutAway>
  </BrowserRouter>
);

export default App;
