import React from 'react';
import { Route, Switch } from "../../imports/react-router-dom.import";
import HomeView from '../../modules/home/home.view';
import MaterialsView from '../../modules/inventory/materials/materials.view';
import BowsView from '../../modules/inventory/bows/bows.view';
import TestExperimental from '../../modules/test/test.experimental';
import SeedView from '../../modules/seed/seed.view';

const Routing = () => {
  return (
    <Switch>
      <Route path="/home/" exact component={ HomeView }/>
      <Route path="/inventory/bows/" exact component={ BowsView } />
      <Route path="/inventory/materials/" exact component={ MaterialsView } />
      <Route path="/seed/" exact component={ SeedView } />
      <Route path="/test/" exact component={ TestExperimental } />
      <Route component={ HomeView } />
    </Switch>
  );
}

export default Routing;