import React, { Component } from 'react';
import { Row, Container, Button, Col, Card } from 'react-bootstrap';
import FormLoginComponent from './form-login/form-login.component';
import { connect } from '../../imports/react-redux.import';
import { loginWhitGoogle, createUser, login } from '../../core/actions/login.actions';
import FormRegisterUserComponent from './form-register-user/form-register-user.component';
import { UserDataModel } from '../../core/models/user-data.model';

class LoginView extends Component<any,any> {
  
  constructor(props: any) {
    super(props);
    
    this.state = {
      edit: false
    }
  }
  
  private submitRegistUser(values: any): void {
    this.props.createUser(values); 
    this.setState({ edit: false })
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center mt-5">
          <Col md={ 4 }>
            <Card className="card-shadow">
              <Card.Body>
                <div className="text-center">
                  <img 
                    className="rounded-circle"
                    alt="iconLogin"
                    src="https://cdn.dribbble.com/users/1055986/screenshots/3282734/zelda-gif-dribbble.gif"
                    width="250px"
                    height="180px"
                  />
                </div>

                {
                  !this.state.edit ?
                    <>
                      <FormLoginComponent
                        submitActions={ (data: any) => this.props.login(data) }
                        cancel={ () => this.setState({ edit: true }) }
                      />

                      <div className="text-center">
                        <Button 
                          className="mt-3"
                          variant="outline-dark" 
                          onClick={ () => this.props.loginWhitGoogle() }
                        >
                          <img 
                            alt="googleIcon"
                            src="https://img.icons8.com/bubbles/2x/google-logo.png" 
                            width="40px" 
                            height="40px"
                          />
                          Iniciar con Google
                        </Button>
                      </div>
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
