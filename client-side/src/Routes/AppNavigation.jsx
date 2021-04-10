import React, { Component } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Games from "../component/Games";
import LoginPage from "../component/PhoneNumber";
import Chatting from "../component/Chatting";
import Settings from "../component/Settings";
import OnlinePlayers from "../component/OnlinePlayers";
import Congratulation from "../component/Games/Congratulation";

class AppNavigation extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* <PublicRoute /> */}
          <PublicRoute component={LoginPage} path='/' exact/>
          <PublicRoute component={OnlinePlayers} path='/online_players' exact/>
          <PublicRoute component={Games} path="/games" exact />
          <PublicRoute component={Chatting} path="/chatting" exact />
          <PublicRoute component={Settings} path="/settings" exact />
          <PublicRoute component={Congratulation} path="/congratulations" exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default AppNavigation;
