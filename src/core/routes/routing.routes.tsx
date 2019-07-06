import React from 'react';
import { Route, Switch } from "../../imports/react-router-dom.import";
import MaterialComponentConnect from '../../modules/inventory/materials/materials.component';
import HomeView from '../../modules/home/home.view';

const Routing = () => {
  return (
    <Switch>
      <Route path="/home/" exact component={ HomeView }/>
      <Route path="/inventory/materials/" exact component={ MaterialComponentConnect } />
    </Switch>
  );
}

export default Routing;