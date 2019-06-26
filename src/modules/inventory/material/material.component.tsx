import React, { Component, ReactElement } from 'react';
import { Row, Col } from 'react-bootstrap';
import Firebase from '../../../shared/firebase.shared';
import { MaterialModel } from '../../../core/models/material.model';

class MaterialComponent extends Component<any,any> {
  
  firebase: Firebase = new Firebase();
  materials: Array<MaterialModel> = new Array();
  materialItems: Array<ReactElement> = new Array();

  constructor(props: any) {
    super(props);

    this.state = {
      materials: null
    };

    this.firebase.on('core',(snapshot: any) => {
      this.materials = snapshot.val().material.map((data: any) => {
        return new MaterialModel({
          name: data.name,
          description: data.description,
          img: data.img,
          uses: data.uses,
          value: data.value
        });
      });

      this.setState({
        materials: this.materials
      });
    });
  }

  private renderData() {
    this.materials.forEach(element => {
      this.materialItems.push(
        <Col md={3}>
          <h3>{element.name}</h3>
          <img src={element.img} />
          <p>{element.uses}</p>
          <p>{element.description}</p>
          <p>{element.value}</p>
        </Col>
      );
    });
    return this.materialItems;
  }
  
  render() {
    const { materials } = this.state;
    return (
      <Row>
        {materials ? this.renderData() : <div>Cargando datos...</div>}
      </Row>
    );
  }
}

export default MaterialComponent;