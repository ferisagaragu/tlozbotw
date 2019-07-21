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

              <NavItem eventKey="inventory">
                <NavIcon>
                  <img width="30px" height="30px"  src="https://gamepedia.cursecdn.com/zelda_gamepedia_en/thumb/a/ae/BotW_Materials_Icon.png/50px-BotW_Materials_Icon.png?version=3ff337cb5a7a7672c082c8115eaf3f82" ></img>
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