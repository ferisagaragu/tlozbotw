import React, { Component } from 'react';
import { Row, Container, Col, Card } from 'react-bootstrap';
import FormLoginComponent from './form-login/form-login.component';
import { connect } from '../../imports/react-redux.import';
import { loginWhitGoogle, createUser, login } from '../../core/actions/login.actions';
import FormRegisterUserComponent from './form-register-user/form-register-user.component';
import { UserDataModel } from '../../core/models/user-data.model';
import { LoginPropsInterface, LoginStateInterface } from '../../core/interfaces/login.interfaces';
import LogoLoginComponent from './logo-login/logo-login.component';
import DashboardExternalLoginComponent from './dashboard-external-login/dashboard-external-login.component';

class LoginView extends Component<LoginPropsInterface,LoginStateInterface> {
  
  constructor(props: any) {
    super(props);
    
    this.state = {
      edit: false
    }
  }
  
  private submitRegistUser(values: any): void {
    this.props.createUser(values); 
    this.setState({ edit: false });
  }

  render() {
    const { edit } = this.state;
    const { login, loginWhitGoogle } = this.props;

    return (
      <Container>
        <Row className="justify-content-md-center mt-5">
          <Col md={ 4 }>
            <Card className="card-shadow">
              <Card.Body>
                <LogoLoginComponent />
                {
                  !edit ?
                    <>
                      <FormLoginComponent
                        submitActions={ (data: any) => login(data) }
                        cancel={ () => this.setState({ edit: true }) }
                      />

                      <DashboardExternalLoginComponent 
                        onLoginWhitGoogle={ () => loginWhitGoogle() }
                      />                     
                    </>  
                  :
                    <FormRegisterUserComponent
                      submitActions={(values: any) => this.submitRegistUser(values) } 
                      cancel={ () => this.setState({ edit: false }) }
                    />
                }
              </Card.Body>
            </Card>  
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  loginWhitGoogle: () => dispatch(loginWhitGoogle()),
  login: ({ username, password }: any) => dispatch(login(username,password)), 
  createUser: (data: UserDataModel) => dispatch(createUser(data))
});

export default connect(null,mapDispatchToProps)(LoginView);
