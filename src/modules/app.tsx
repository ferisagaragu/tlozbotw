import React, { Component } from 'react';

import LoginView from './login/login.view';
import { connect } from '../imports/react-redux.import';
import NavBarView from './layout/nav-bar.view';
import AppInterface from '../core/interfaces/app.interface';

class App extends Component<AppInterface,any> {
  render() {
    const userData = this.props.userData;

    return (
      <>
        { 
          !this.props.userData ?
            <LoginView />
          :
            <NavBarView 
              userData={ userData }
            />
        }
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({ 
  userData: state.userData
});

export default connect(mapStateToProps,null)(App);
