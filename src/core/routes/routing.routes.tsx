import React from 'react';
import { Route, Switch } from "../../imports/react-router-dom.import";
import HomeView from '../../modules/home/home.view';
import MaterialsView from '../../modules/inventory/materials/materials.view';
import BowsView from '../../modules/inventory/bows/bows.view';

const Routing = () => {
  return (
    <Switch>
      <Route path="/home/" exact component={ HomeView }/>
      <Route path="/inventory/bows/" exact component={ BowsView } />
      <Route path="/inventory/materials/" exact component={ MaterialsView } />
      <Route component={ HomeView } />
    </Switch>
  );
}

export default Routing;