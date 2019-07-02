import React, { Component, ReactElement } from 'react'
import { Field, reduxForm, connect } from '../../../../imports/react-redux.import'
import { Modal, Button } from 'react-bootstrap';
import { MaterialModel } from '../../../../core/models/material.model';
import { FormEditMaterialInterface } from '../../../../core/interfaces/material-component.interface';
import { ExampleEnum } from '../../../../core/enums/material-reducer.enum';
import { updateMaterials } from '../../../../core/actions/material.actions';

class FormEditMaterialComponent extends Component<FormEditMaterialInterface,any> {

  constructor(props: any) {
    super(props);

    this.state = {
      show: false
    };
  }

  private renderTextField(metaData: any): ReactElement {
    const { 
      input, 
      label, 
      type, 
      meta: { 
        touched, 
        error, 
        warning 
      } 
    } = metaData;

    return (
      <div>
        <div>
          <input
            className="form-control mb-3" 
            {...input} 
            placeholder={label} 
            type={type}/>
          {
            touched && ((error && <span className="text-danger" >{error}</span>) 
            || (warning && <span className="text-warning">{warning}</span>))
          }
        </div>
      </div>
    );
  }

  private renderTextArea(metaData: any): ReactElement {
    const { 
      input, 
      label,
      type,
      meta: { 
        touched, 
        error, 
        warning 
      } 
    } = metaData;
  
    return (
      <div>
        <div>
          <textarea
            className="form-control mb-3" 
            {...input} 
            placeholder={label} 
            type={type}/>
          {
            touched && ((error && <span className="text-danger" >{error}</span>) 
            || (warning && <span className="text-warning">{warning}</span>))
          }
        </div>
      </div>
    );
  }

  private submit(values: MaterialModel, reduxFuction: any, reduxForm: any): void {
    const { reset, updateMaterials, id } = reduxForm;
    updateMaterials(id, values);
    reset();
  }

  render() {
    const { handleSubmit, reset, submitting, valid } = this.props;

    return (
      <>
        <Button 
          variant="outline-info" 
          onClick={() => { 
            this.setState({ show: true });
            this.props.initialize(this.props.initialValues); 
          }}
        >
          Editar
        </Button>

        <Modal show={ this.state.show }>
          <Modal.Header>
            <Modal.Title>
              Editar Material
            </Modal.Title>
          </Modal.Header>

          <form onSubmit={ handleSubmit(this.submit) }>
            <Modal.Body>
              <Field 
                name="name" 
                type="text" 
                component={ this.renderTextField } 
                label="Nombre"
              />

              <Field 
                name="description" 
                type="textarea" 
                component={ this.renderTextArea }
              />

              <Field 
                name="life" 
                type="text" 
                component={ this.renderTextField } 
                label="Vida"
              />
            </Modal.Body>

            <Modal.Footer>
              <div>
                <Button 
                  variant="outline-info"
                  type="submit" 
                  disabled={ submitting }
                  onClick={ () => { this.setState({ show: !valid }); } } 
                >
                  Guardar
                </Button>

                <Button 
                  className="ml-3"
                  variant="outline-danger"
                  type="button" 
                  onClick={() => { this.setState({ show: false }); reset();}}
                >
                  Cancelar
                </Button>
              </div>
            </Modal.Footer>
          </form>
        </Modal>
      </>
    );
  }

}

const validate = (values: any) => {
  const errors = {
    name: '',
    description: ''
  }

  if (!values.name) {
    errors.name = 'El nombre es requerido'
  } 

  if (!values.description) {
    errors.description = 'La descripcion es requerida'
  } 

  return errors
}

const warn = (values: any) => {
  const warnings = {
    life: 'Este campo podria no ir'
  }

  if (!values.life) {
    warnings.life = 'La advertencia entro'
  }
  return warnings
}

const mapDispatchToProps = (dispatch: Function) => ({
  updateMaterials: (id: number, data: MaterialModel) => ( dispatch(updateMaterials(id, data)) )
});

const FormEditMaterialComponentConnect = connect(null,mapDispatchToProps)(
reduxForm({
  form: ExampleEnum.SUBMIT_EDIT_MATERIAL_FORM,
  validate,
  warn
})(FormEditMaterialComponent));
export default FormEditMaterialComponentConnect;