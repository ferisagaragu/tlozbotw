import React, { Component } from 'react';
import { reduxForm, Field } from '../../../imports/react-redux.import';
import { renderTextField } from '../../../shared/redux-render-fields.shared';
import { Button } from 'react-bootstrap';
import { LoginReducerEnum } from '../../../core/enums/login-reducer.enum';

class FormLoginComponent extends Component<any> {
  
  render() {
    const { handleSubmit, submitting, submitActions, cancel } = this.props;

    return (
      <form onSubmit={ handleSubmit(submitActions) }>
        <Field 
          className="form-control"
          name="username"
          type="email"
          component={ renderTextField }
          label="Usuario"
        />
        
        <Field 
          className="form-control"
          name="password"
          type="password"
          component={ renderTextField }
          label="Contraseña"
        />

        <div className="text-center mt-4">
          <Button 
            className="mr-3"
            variant="outline-info"
            onClick={ cancel }
          >
            Registrarse
          </Button>

          <Button 
            variant="outline-success" 
            type="submit" 
            disabled={ submitting }
          >
            Iniciar sesión
          </Button>
        </div>
      </form>
    );
  }
}

const validate = (values: any) => {
  const errors = {
    username: '',
    userpassword: ''
  };

  if (!values.username) {
    errors.username = 'El nombre de usuario es requerido';
  }

  if (!values.userpassword) {
    errors.userpassword = 'La contraseña es requerida';
  }

  return errors;
}

export default reduxForm({
  form: LoginReducerEnum.SUBMIT_LOGIN_FORM,
  validate
})(FormLoginComponent);