import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { DashboardExternalLoginPropsInterface } from '../../../core/interfaces/login.interfaces';
import googleLogo from '../../../styles/img/google_logo.png';
import './dashboard-external-login.css';

class DashboardExternalLoginComponent extends Component<DashboardExternalLoginPropsInterface> {
  render() {
    const { onLoginWhitGoogle } = this.props;

    return (
      <div className="text-center">
        <Button 
          className="mt-3"
          variant="outline-dark" 
          onClick={ () => onLoginWhitGoogle() }
        >
          <img 
            className="google-logo"
            alt="googleIcon"
            src={ googleLogo }
          />
          Iniciar con Google
        </Button>
      </div>
    );
  }
}

export default DashboardExternalLoginComponent;