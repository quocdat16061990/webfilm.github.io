import React from 'react';
import './assets/scss/index.scss'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { routesHome, routesAdmin } from "./routes";
import HomeTemplate from './template/HomeTemplate';
import AdminTemplate from "./template/AdminTemplate";
import PageNotFound from "./pages/page-not-found";
function App() {
  const showHome = routes => {
    if(routes.length > 0){
      return routes.map((item, index) => {
        return <HomeTemplate key={index} exact={item.exact} path={item.path} Component={item.component}/>
      })
    }
  }
  const showAdmin = routes => {
    if(routes.length > 0) {
      return routes.map((item, index) => {
        return  <AdminTemplate key={index} exact={item.exact} path={item.path} Component={item.component} />
      })
    }
  }
  return (
    <BrowserRouter>
      <Switch>
        {showHome(routesHome)}
        {showAdmin(routesAdmin)}
        <Route exact path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
