import React, { Component } from 'react';
import { ItemMaterialPropsInterface } from '../../../../core/interfaces/inventory-materials.interface';
import { Col, Card, ListGroup } from 'react-bootstrap';
import heartSymbol from '../../../../shared/life-indicator.shared';
import { materialUsesList } from '../../../../shared/material-uses.shared';
import IndicatorPhotoMaterialComponent from '../indicator-photo-material/indicator-photo-material.component';
import photoNo from '../../../../styles/img/photo-no.png';
import './item-material.css';

class ItemMaterialComponent extends Component<ItemMaterialPropsInterface> {

  private onCheck(check: boolean): void {
    const { material, selectMaterial } = this.props;
    material.check = check;
    selectMaterial(material);
  }

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
                  +material.life !== 0 ? 
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
              +material.life !== 0 ?
                <IndicatorPhotoMaterialComponent 
                  check={ material.check }
                  onCheck={ (check: boolean) => this.onCheck(check) }
                />
              :
                <img 
                  className="float-right"
                  alt="noPhoto" 
                  src={ photoNo } 
                />
            }
          </Card.Footer>
        </Card>
      </Col>
    );
  }

}

export default ItemMaterialComponent;