import React, { Component } from 'react';
import { Container, Navbar, Form, Nav, NavDropdown } from 'react-bootstrap';
import Routing from '../../core/routes/routing.routes';
import { Route } from '../../imports/react-router-dom.import';
import SideNav, { NavItem, NavIcon, NavText } from '../../imports/react-sidenav.import';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { logout } from '../../core/actions/login.actions';
import { connect } from '../../imports/react-redux.import';
import { NavBarInterface } from '../../core/interfaces/layout.interface';

class NavBarView extends Component<NavBarInterface,any> {
  render() {
    const { photo, name, role } = this.props.userData;

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
                Zeld-Pedia
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" />

                <Form inline className="form-nav">
                  <img alt="userImage" src={ photo } className="rounded-circle mr-3" width="40px" height="40px"/>
                  <NavDropdown title={ name } id="basic-nav-dropdown">
                    {
                      role === 1 &&
                        <NavDropdown.Item> 
                          Administrador 
                        </NavDropdown.Item>
                    }
                    <NavDropdown.Item> 
                      Informacion 
                    </NavDropdown.Item>

                    <NavDropdown.Divider />

                    <NavDropdown.Item 
                      onClick={ () => this.props.logout() }
                    > 
                      Cerrar sesión 
                    </NavDropdown.Item>
                  </NavDropdown>
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
    );
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  logout: () => dispatch(logout())
});

export default connect(null,mapDispatchToProps)(NavBarView);