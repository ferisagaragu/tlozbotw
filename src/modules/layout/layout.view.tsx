import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Routing from '../../core/routes/routing.routes';
import { Route } from '../../imports/react-router-dom.import';
import SideNav, { NavItem, NavIcon, NavText } from '../../imports/react-sidenav.import';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { logout } from '../../core/actions/login.actions';
import { connect } from '../../imports/react-redux.import';
import { LayoutPropsInterface } from '../../core/interfaces/layout.interface';
import NavbarHeaderComponent from './navbar-header/navbar-header.component';

class LayoutView extends Component<LayoutPropsInterface> {
  
  private onSelect(selected: any, location: any, history: any): void {
    const to = '/' + selected;
    if (location.pathname !== to) {
      history.push(to);
    }
  }
  
  render() {
    const { logout, userData } = this.props; 

    return (
      <Route render={({ location, history }: any) => (
        <>
          <SideNav
            className="side-bar"
            onSelect={ (selected: any) => this.onSelect(selected, location, history) }
          >
            <NavbarHeaderComponent 
              onLogOut={ () => logout() }
              userData={ userData }
            />

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

              <NavItem eventKey="seed">
                <NavIcon>
                  <FontAwesomeIcon className="icon-awesome" icon="home" />
                </NavIcon>

                <NavText>
                  Semillas
                </NavText>
              </NavItem>

              <NavItem eventKey="inventory">
                <NavIcon>
                  <FontAwesomeIcon className="icon-awesome" icon="suitcase" />
                </NavIcon>

                <NavText>
                  Inventario
                </NavText>

                <NavItem eventKey="" subnav={ true }>
                  <NavText>
                    Armas
                  </NavText>
                </NavItem>

                <NavItem eventKey="inventory/bows" subnav={ true }>
                  <NavText>
                    Arcos
                  </NavText>
                </NavItem>

                <NavItem eventKey="" subnav={ true }>
                  <NavText>
                    Flechas
                  </NavText>
                </NavItem>

                <NavItem eventKey="" subnav={ true }>
                  <NavText>
                    Escudos
                  </NavText>
                </NavItem>

                <NavItem eventKey="" subnav={ true }>
                  <NavText>
                    Vestimenta
                  </NavText>
                </NavItem>

                <NavItem eventKey="inventory/materials" subnav={ true }>
                  <NavText>
                    Materiales
                  </NavText>
                </NavItem>

                <NavItem eventKey="" subnav={ true }>
                  <NavText>
                    Alimentos
                  </NavText>
                </NavItem>

                <NavItem eventKey="" subnav={ true }>
                  <NavText>
                    Importante
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
        </>
        )}
      />
    );
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  logout: () => dispatch(logout())
});

export default connect(null,mapDispatchToProps)(LayoutView);