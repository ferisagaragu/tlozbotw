import React, { Component } from 'react';
import { Col, Card, ListGroup } from 'react-bootstrap';
import { ItemBowsPropsInterface } from '../../../../core/interfaces/inventory-bows.interface';
import IndicatorPhoto from '../../../../shared/indicator-photo.shared';
import './item-bows.css';

class ItemBowsComponent extends Component<ItemBowsPropsInterface> {
  render() {
    const { bow, onCheck } = this.props;

    return (
      <Col md={ 3 } className="mt-5">
        <Card className="card-shadow card-size">
          <Card.Header className="item-header">
            <h3>
              { bow.name }
              <img 
                className="float-right"
                alt={ bow.name }
                src={ bow.img } 
              />
            </h3>
          </Card.Header>

          <Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <label>
                  <b>Daño:&nbsp;</b>
                  { bow.damage }
                </label>
              </ListGroup.Item>
              
              <ListGroup.Item>
                <p>{ bow.description }</p>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>

          <Card.Footer className="item-footer">
            {
              <IndicatorPhoto
                check={ true }
                onCheck={ (check: boolean) => onCheck(check) }
              />
            }
          </Card.Footer>
        </Card>
      </Col>
    );
  }
}

export default ItemBowsComponent;