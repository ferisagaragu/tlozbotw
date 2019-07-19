import React, { Component } from 'react';
import { reduxForm, Field } from '../../../imports/react-redux.import';
import { Button, Card } from 'react-bootstrap';
import { renderTextField, renderTextArea } from '../../../shared/redux-render-fields.shared';
import { NewsReducerEnum } from '../../../core/enums/news-reducer.enum';
import { FormNewsPropsIterface, FormNewsStateIterface } from '../../../core/interfaces/home.interface';
import './form-news.css';

class FormNewsComponent extends Component<FormNewsPropsIterface,FormNewsStateIterface> {

  constructor(props: any) {
    super(props);

    this.state = {
      urlIcon: this.props.initialValues.img
    }
  }

  private setIcon(url: string): void {
    this.setState({
      urlIcon: url
    });
  } 

  render() {
    const { handleSubmit, cancel, submitting, submitActions } = this.props;
    const { urlIcon } = this.state;

    return (
      <form onSubmit={ handleSubmit(submitActions) }>
        <Card className="text-left">
          <Card.Img 
            className="card-img"
            variant="top" 
            src={ urlIcon }
            alt="img-card" 
          />

          <Card.Body>
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
              name="title"
              type="text"
              component={ renderTextField }
              label="Titulo"
            />

            <Field 
              className="form-control"
              name="information"
              type="text"
              component={ renderTextArea }
              label="Informacion"
            />
          </Card.Body>

          <Card.Footer className="text-right">
            <Button 
              className="mr-3"
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
          </Card.Footer>
        </Card>
      </form>
    );
  }
}

const validate = (values: any) => {
  const errors = {
    img: '',
    title: '',
    information: ''
  }
  
  if (!values.img) {
    errors.img = 'El icono es requerido';
  }

  if (!values.title) {
    errors.title = 'El titulo es requerido';
  }

  if (!values.information) {
    errors.information = 'La informacion es requerida';
  }

  return errors
}

export default reduxForm({
  form: NewsReducerEnum.SUBMIT_NEWS_FORM,
  validate
})(FormNewsComponent);