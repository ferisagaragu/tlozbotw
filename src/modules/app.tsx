import React, { Component } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Routing from '../core/routes/routing.routes';
import { Route } from '../imports/react-router-dom.import';
import SideNav, { NavItem, NavIcon, NavText } from '../imports/react-sidenav.import';


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
                The Legend of Zelda Breath of the Wild CheckList
              </Navbar.Brand>
            </Navbar>

            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>

                    <NavText>
                        Home
                    </NavText>
                </NavItem>
                <NavItem eventKey="inventory/materials">
                    <NavIcon>
                        <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                    </NavIcon>

                    <NavText>
                        Devices
                    </NavText>
                </NavItem>
            </SideNav.Nav>
          </SideNav>
          <main>>
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
