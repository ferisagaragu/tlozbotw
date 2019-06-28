import React, { Component } from 'react';
import page404 from '../../styles/img/page-404.png'; 
import { Row, Col } from 'react-bootstrap';
import './page-404.css';

class Page404View extends Component {

  render() {
    return (
      <Row>
        <Col md={ 12 } xl={ 12 } className="text-center h1-404">
          <h1>Esta pagína no esta disponible</h1>
          <img src={ page404 } alt="link_dreams" className="mt-5 mb-5"/>
          <h1>Link se quedo dormido</h1>
        </Col>
      </Row>
    );
  }
}

export default Page404View;