import React, { Component } from 'react';
import { Col, Button, Row } from 'react-bootstrap';
import IndicatorSeedComponent from '../indicator-seed/indicator-seed.component';
import { ItemSeedPropsInterface } from '../../../core/interfaces/seed.interface';
import './item-seed.css';

class ItemSeedComponent extends Component<ItemSeedPropsInterface> {
    
  render() {
    const { title, buttonLabel, status, onClickTime, onSeedChange } = this.props;

    return (
      <div className="talk-bubble talktext round mb-3">
        <Row>
          <Col md={ 6 }>
            <h5 className="mt-2 ml-3">{ title }</h5>
          </Col>

          <Col 
            className="text-right"
            md={ 6 }
          >
            <Button
              className="mr-3"
              variant="outline-primary"
              onClick={ () => onClickTime(buttonLabel) }
            >
              { buttonLabel }
            </Button>

            <IndicatorSeedComponent 
              isCheck={ status }
              onChange={ (evt: any) => onSeedChange(evt) }
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default ItemSeedComponent;