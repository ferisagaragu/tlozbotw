import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class HomeView extends Component {
    
  render() {
    return (
      <Row>
        <Col md={ 12 } className="text-center">
          <h1>Bienvenido</h1>
        </Col>
      </Row>
    );
  }
}

export default HomeView;