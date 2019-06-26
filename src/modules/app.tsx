import React, { Component } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import InventoryView from './inventory/inventory.view';

class App extends Component<any,{}> {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>The Legend of Zelda Breath of the Wild CheckList</Navbar.Brand>
        </Navbar>
        
        <Container>
          <InventoryView />
        </Container>
      </>
    );
  }
}

export default App;
