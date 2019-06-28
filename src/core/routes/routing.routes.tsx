import React from 'react';
import { Route } from "../../imports/react-router-dom.import";
import InventoryView from '../../modules/inventory/inventory.view';
import MaterialComponentConnect from '../../modules/inventory/materials/materials.component';
import HomeView from '../../modules/home/home.view';

const Routing = () => {
  return (
    <>
      <Route path="/home/" exact component={ HomeView }/>
      <Route path="/inventory/" exact component={ InventoryView } />
      <Route path="/inventory/materials/" exact component={ MaterialComponentConnect } />
    </>
  );
}

export default Routing;