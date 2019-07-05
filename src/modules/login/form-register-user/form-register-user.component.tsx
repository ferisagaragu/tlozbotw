import React, { Component } from 'react';
import { reduxForm, Field } from '../../../imports/react-redux.import';
import { Button } from 'react-bootstrap';
import { renderTextField } from '../../../shared/redux-render-fields.shared';

class FormRegisterUserComponent extends Component<any> {
  
  render() {
    const { handleSubmit, submitting, submitActions, cancel } = this.props;

    return (
      <form onSubmit={ handleSubmit(submitActions) }>
        
        <Field 
          className="form-control"
          name="patho"
          type="text"
          component={ renderTextField }
          label="Foto URL"
        />
        
        <Field 
          className="form-control"
          name="name"
          type="text"
          component={ renderTextField }
          label="Nombre"
        />

        <Field 
          className="form-control"
          name="email"
          type="email"
          component={ renderTextField }
          label="Correo"
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
            variant="outline-danger"
            onClick={ cancel }
          >
            Cancelar
          </Button>

          <Button 
            variant="outline-info" 
            type="submit" 
            disabled={ submitting }
          >
            Registrar
          </Button>
        </div>
      </form>
    );
  }
}

const validate = (values: any) => {
  const errors = {} 

  return errors;
}

export default reduxForm({
  form: 'syncValidation',
  validate
})(FormRegisterUserComponent);