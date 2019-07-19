import React, { Component } from 'react';
import loginLogo from '../../../styles/img/login_logo.gif';
import './logo-login.css';

class LogoLoginComponent extends Component {
  render() {
    return (
      <div className="text-center">
        <img 
          className="rounded-circle login-logo"
          alt="iconLogin"
          src={ loginLogo }
        />
      </div>
    );
  }
}

export default LogoLoginComponent;