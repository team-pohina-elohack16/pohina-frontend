import React from "react";
import { Route } from "react-router";

import { redirectNonUser, redirectNonAdmin } from "./middleware/restrictAccess";

import App from "./components/app/App";
import FrontPage from "./components/app/FrontPage";
import Forum from "./components/forum/Forum";
import NotFound from "./components/app/NotFound";

import Chart from "./components/chart/Chart";
import MyCompany from "./components/mycompany/MyCompany";
import MyCompany2 from "./components/mycompany/MyCompany2";

export default (
  <Route>
    <Route path="" component={App}>
      <Route path="/" component={FrontPage} />
      <Route path="/chart" component={Chart} />
      <Route path="/forum" component={Forum}/>
      <Route path="/mycompany" component={MyCompany} />
      <Route path="/mycompany2" component={MyCompany2} />
      <Route path="*" component={NotFound}/>
    </Route>
  </Route>
);
