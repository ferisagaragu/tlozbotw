import React, { Component } from 'react';
import { Field, reduxForm } from '../../../../imports/react-redux.import';
import { MaterialUsesEnum } from '../../../../core/enums/material-uses.enum';
import { Row, Col, Button, Modal } from 'react-bootstrap';
import heartSymbol from '../../../../shared/life-indicator.shared';
import { renderTextField, renderCheckBox, renderTextArea } from '../../../../shared/redux-render-fields.shared';
import { FormMaterialPropsInterface, FormMaterialStateInterface } from '../../../../core/interfaces/inventory-materials.interface';
import { MaterialReducerEnum } from '../../../../core/enums/material-reducer.enum';


class FormMaterialComponent extends Component<FormMaterialPropsInterface,FormMaterialStateInterface> {
  
  constructor(props: FormMaterialPropsInterface) {
    super(props);

    this.state = {
      urlIcon: this.props.initialValues.img,
      lifeIndicator: this.props.initialValues.life
    };
  }

  private setIcon(url: string): void {
    this.setState({
      urlIcon: url
    });
  } 

  private setLifeIndicator(url: number): void {
    this.setState({
      lifeIndicator: url
    });
  } 

  render() {
    const { handleSubmit, cancel, submitting, submitActions, initialValues } = this.props;
    
    return (
      <form onSubmit={ handleSubmit(submitActions) }>
        <Row>
          <Col md={ 12 }>

            <div className="text-center">
              <img 
                className="img-icon"
                alt={ initialValues.name } 
                src={ this.state.urlIcon }
              />
            </div>

            <Field 
              className="form-control"
              name="img"
              type="text"
              component={ renderTextField }
              label="Icono"
              onKeyUp={ (evt: any) => this.setIcon(evt.currentTarget.value) }
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
              name="value"
              type="number"
              component={ renderTextField }
              label="Valor en Rupias"
            />

            <Field 
              className="form-control"
              name="life"
              type="number"
              component={ renderTextField }
              label="Vida"
              onKeyUp={ (evt: any) => this.setLifeIndicator(evt.currentTarget.value) }
            />

            <div className="mb-3">
              {
                heartSymbol(this.state.lifeIndicator)
              }
            </div>
          </Col>
        </Row>
        
        <Row className="mb-3">
          <Col md={ 5 }>
            <Field 
              name="addLife"
              type="checkbox"
              component={ renderCheckBox }
              label={ MaterialUsesEnum.ADD_LIFE }
            />

            <Field 
              name="sell"
              type="checkbox"
              component={ renderCheckBox }
              label={ MaterialUsesEnum.SELL }
            />

            <Field 
              name="improveArmor"
              type="checkbox"
              component={ renderCheckBox }
              label={ MaterialUsesEnum.IMPROVE_ARMOR }
            />

            <Field 
              name="elixir"
              type="checkbox"
              component={ renderCheckBox }
              label={ MaterialUsesEnum.ELIXIR }
            />
          </Col>

          <Col md={ 7 }>
            <Field 
              name="defenseCooking"
              type="checkbox"
              component={ renderCheckBox }
              label={ MaterialUsesEnum.DEFENCE_COOKING }
            />

            <Field 
              name="heartsCooking"
              type="checkbox"
              component={ renderCheckBox }
              label={ MaterialUsesEnum.HEARTS_COOKING }
            />

            <Field 
              name="ancestralWeapons"
              type="checkbox"
              component={ renderCheckBox }
              label={ MaterialUsesEnum.ANCESTRAL_WEAPONS }
            />
            
            <Field 
              name="specificRecipes"
              type="checkbox"
              component={ renderCheckBox }
              label={ MaterialUsesEnum.SPECIFIC_RECIPES }
            />
          </Col>
        </Row>
        
        <Field 
          className="form-control"
          name="description"
          component={ renderTextArea }
          label="Descripcion"
        />

        <Modal.Footer>
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
        </Modal.Footer>
      </form>
    );
  }
}

const validate = (values: any) => {
  const errors = {
    name: '',
    elixir: '',
    img: '',
    value: '',
    life: '',
    description: ''
  }
  
  if (!values.img) {
    errors.img = 'El icono es requerido';
  }

  if (!values.name) {
    errors.name = 'El nombre es requerido';
  }

  if (!values.value) {
    errors.value = 'El valor de las Rupias es requerido';
  }

  if (values.value < 0) {
    errors.value = 'No puede haber un valor negativo de Rupias';
  }

  if (!values.life) {
    errors.life = 'El valor de las vida es requerido';
  }

  if (values.life > 30) {
    errors.life = 'El valor de las vida debe tener un rango entre 0 a 30';
  }

  if (!(
    values.addLife ||
    values.sell ||
    values.improveArmor ||
    values.elixir ||
    values.defenseCooking ||
    values.heartsCooking ||
    values.ancestralWeapons ||
    values.specificRecipes
  )) {
    errors.elixir = 'Seleccionada al menos una propiedad';
  }

  if (!values.description) {
    errors.description = 'La descripcion es requerida';
  }

  return errors
}

export default reduxForm({
  form: MaterialReducerEnum.SUBMIT_MATERIAL_FORM,
  validate
})(FormMaterialComponent);