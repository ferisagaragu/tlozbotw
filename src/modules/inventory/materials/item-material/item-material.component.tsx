import React, { Component } from 'react';
import { ItemMaterialPropsInterface } from '../../../../core/interfaces/inventory-materials.interface';
import { Col, Card, ListGroup } from 'react-bootstrap';
import photo from '../../../../styles/img/photo.png';
import './item-material.css';
import heartSymbol from '../../../../shared/life-indicator.shared';
import { materialUsesList } from '../../../../shared/material-uses.shared';

class ItemMaterialComponent extends Component<ItemMaterialPropsInterface> {

  render() {
    const { material } = this.props;

    return (
      <Col md={ 3 } className="mt-5">
        <Card className="card-shadow card-size">
          <Card.Header className="item-header">
            <h3>
              { material.name }
              <img 
                className="float-right"
                alt={ material.name } 
                src={ material.img }  
              />
            </h3>
          </Card.Header>

          <Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>
                { 
                  material.life !== 0 ? 
                    heartSymbol(material.life) 
                  : 
                    <label>
                      <b>Material</b>
                    </label>
                }
              </ListGroup.Item>
              
              <ListGroup.Item>
                { materialUsesList(material) }
              </ListGroup.Item>

              <ListGroup.Item>
                <p>{ material.description }</p>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>

          <Card.Footer className="item-footer">
            {
              material.life !== 0 &&
              <>
                <input type="checkbox" className="float-right" />

                <img 
                  className="float-right"
                  width="50px"
                  height="50px"
                  alt="camera"
                  src={ photo } 
                />
              </> 
            }
          </Card.Footer>
        </Card>
      </Col>
    );
  }

}

export default ItemMaterialComponent;