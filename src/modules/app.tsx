import React, { Component } from 'react';
import LoginView from './login/login.view';
import { connect } from '../imports/react-redux.import';
import AppInterface from '../core/interfaces/app.interface';
import LayoutView from './layout/layout.view';
import { login } from '../core/actions/login.actions';
import Cookies from '../imports/js-cookie.import';

class App extends Component<AppInterface> {
  
  componentDidMount() {
    //this.props.login(JSON.parse(Cookies.get('userData')));
  }

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

const mapDispatchToProps = (dispatch: Function) => ({
  login: ({ username, password }: any) => dispatch(login(username,password))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
