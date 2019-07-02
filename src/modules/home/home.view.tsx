import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import LifeIndicator from '../../shared/life-indicator.shared';

class HomeView extends Component {
  
  life: LifeIndicator = new LifeIndicator();
  
  render() {
    return (
      <Row>
        <Col md={ 12 } className="text-center">
          <Col md={ 3 }>{ this.life.heartSymbol(30) }</Col>
          { this.life.heartSymbol(5.50) }
          { this.life.heartSymbol(5.50) }
        </Col>
      </Row>
    );
  }
}

export default HomeView;