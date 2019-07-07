import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form } from 'react-bootstrap';
import { NavbarHeaderPropsInterface } from '../../../core/interfaces/layout.interface';

class NavbarHeaderComponent extends Component<NavbarHeaderPropsInterface> {
  render() {
    const { onLogOut } = this.props;
    const { photo, name, role } = this.props.userData;
    
    return (
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
                onClick={ () => onLogOut() }
              > 
                Cerrar sesión 
              </NavDropdown.Item>
            </NavDropdown>
          </Form>

        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarHeaderComponent;