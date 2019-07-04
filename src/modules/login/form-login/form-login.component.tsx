import React, { Component } from 'react';
import { reduxForm, Field } from '../../../imports/react-redux.import';
import { renderTextField } from '../../../shared/redux-render-fields.shared';
import { Button } from 'react-bootstrap';

class FormLoginComponent extends Component<any> {
  
  
  render() {
    const { handleSubmit, submitActions, cancel, submitting } = this.props;

    return (
      <form onSubmit={ handleSubmit(submitActions) }>
        <Field 
          name="username"
          type="email"
          component={ renderTextField }
          label="Usuario"
        />
        
        <Field 
          name="userpassword"
          type="password"
          component={ renderTextField }
          label="Contraseña"
        />
        <div>
          <Button 
            variant="outline-dark" 
            onClick={ cancel }
          >
            Cancelar
          </Button>

          <Button 
            variant="outline-success" 
            type="submit" 
            disabled={ submitting }
          >
            Guardar
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
  form: 'loginForm',
  validate
})(FormLoginComponent);