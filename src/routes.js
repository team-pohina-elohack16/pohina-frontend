import React from "react";
import { Route } from "react-router";

import { redirectNonUser, redirectNonAdmin } from "./middleware/restrictAccess";

import App from "./components/app/App";
import FrontPage from "./components/app/FrontPage";
import Forum from "./components/forum/Forum";
import NotFound from "./components/app/NotFound";

import Chart from "./components/chart/Chart";
import Databank from "components/databank/Databank";
import MyCompany from "./components/mycompany/MyCompany";

export default (
  <Route>
    <Route path="" component={App}>
      <Route path="/" component={FrontPage} />
      <Route path="/chart" component={Chart} />
      <Route path="/forum" component={Forum}/>
      <Route path="/databank" component={Databank} />
      <Route path="/mycompany" component={MyCompany} />
      <Route path="*" component={NotFound}/>
    </Route>
  </Route>
);
