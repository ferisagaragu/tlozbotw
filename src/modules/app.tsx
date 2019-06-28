import React, { Component } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Routing from '../core/routes/routing.routes';
import { Route } from '../imports/react-router-dom.import';
import SideNav, { NavItem, NavIcon, NavText } from '../imports/react-sidenav.import';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class App extends Component<any,{}> {
  render() {
    return (
      <Route render={({ location, history }: any) => (
        <React.Fragment>
          <SideNav
            className="side-bar"
            onSelect=
            {
              (selected: any) => {
                const to = '/' + selected;
                if (location.pathname !== to) {
                  history.push(to);
                }
              }
            }
          >
            <Navbar bg="dark" variant="dark" className="nav-bar">
              <Navbar.Brand>
                The Legend of Zelda Breath of the Wild
              </Navbar.Brand>
            </Navbar>

            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon>
                      <i style={{ fontSize: '1.75em' }}> 
                        <FontAwesomeIcon icon="home" />
                      </i>
                    </NavIcon>

                    <NavText>
                      Inicio
                    </NavText>
                </NavItem>
                <NavItem eventKey="inventory">
                    <NavIcon>
                      <i style={{ fontSize: '1.75em' }} >
                        <FontAwesomeIcon icon="suitcase" />
                      </i>
                    </NavIcon>

                    <NavText>
                      Inventario
                    </NavText>
                </NavItem>
            </SideNav.Nav>
          </SideNav>
          <main>
            <Container className="content">
              <Routing />     
            </Container>  
          </main>
        </React.Fragment>
        )}
      />
    );
  }
}

export default App;
