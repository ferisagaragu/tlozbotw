import React, { Component } from 'react';
import LoginView from './login/login.view';
import { connect } from '../imports/react-redux.import';
import AppInterface from '../core/interfaces/app.interface';
import LayoutView from './layout/layout.view';

class App extends Component<AppInterface> {
  render() {
    const userData = this.props.userData;

    return (
      <>
        { 
          !userData ?
            <LoginView />
          :
            <LayoutView 
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
