import React, { Component } from 'react';
import { Container, Navbar, FormControl, Button, Form, Nav, NavDropdown } from 'react-bootstrap';
import Routing from '../core/routes/routing.routes';
import { Route } from '../imports/react-router-dom.import';
import SideNav, { NavItem, NavIcon, NavText } from '../imports/react-sidenav.import';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LoginView from './login/login.view';
import { connect } from '../imports/react-redux.import';
import { logout } from '../core/actions/login.actions';

class App extends Component<any,{}> {
  render() {
    return (
      <>
        { 
          !this.props.userData ?
            <LoginView />
          :
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
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                      </Nav>

                      <Form inline className="form-nav">
                        <img alt="userImage" src={ this.props.userData.photo } className="rounded-circle mr-3" width="40px" height="40px"/>
                        <Button variant="outline-success"
                          onClick={() => {
                            this.props.logout();
                          }}
                        >
                          { this.props.userData.name }
                        </Button>
                      </Form>
                    </Navbar.Collapse>
                  </Navbar>

                  <SideNav.Toggle />
                  <SideNav.Nav defaultSelected="home">
                      <NavItem eventKey="home">
                          <NavIcon>
                            <FontAwesomeIcon className="icon-awesome" icon="home" />
                          </NavIcon>

                          <NavText>
                            Inicio
                          </NavText>
                      </NavItem>
                      <NavItem>
                          <NavIcon>
                            <FontAwesomeIcon className="icon-awesome" icon="suitcase" />
                          </NavIcon>

                          <NavText>
                            Inventario
                          </NavText>

                          <NavItem eventKey="inventory/materials" subnav={ true }>
                            <NavText>
                              Material
                            </NavText>
                          </NavItem>
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
        }
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({ 
  userData: state.userData
});

const mapDispatchToProps = (dispatch: Function) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
