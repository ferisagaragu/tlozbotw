import React, { Component } from 'react';
import { Row, Container, Button } from 'react-bootstrap';
import FormLoginComponent from './form-login/form-login.component';
import { connect } from '../../imports/react-redux.import';
import { login } from '../../core/actions/login.actions';

class LoginView extends Component<any> {
  render() {
    return (
      <Container>
        <Row>
          <FormLoginComponent 
            submitActions={() => {
              console.log('hola');
            }}
            cancel={() => {
              console.log('cancel');
            }}
          />
        </Row>

        <Button 
          variant="outline-dark" 
          onClick={ () => this.props.login() }
        >
          <img src="https://img.icons8.com/bubbles/2x/google-logo.png" width="40px" height="40px"/>
          Whit Google
        </Button>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  login: () => dispatch(login())
});

export default connect(null,mapDispatchToProps)(LoginView);
