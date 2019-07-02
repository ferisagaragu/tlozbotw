import React, { Component, ReactElement } from 'react';
import { ItemMaterialInterface } from '../../../../core/interfaces/material-component.interface';
import { Col, Card, ListGroup } from 'react-bootstrap';
import LifeIndicator from '../../../../shared/life-indicator.shared';
import photo from '../../../../styles/img/photo.png';
import './item-material.css';

class ItemMaterialComponent extends Component<ItemMaterialInterface,{}> {

  private keyUsages: number;
  private lifeIndicator: LifeIndicator;

  constructor(props: any) {
    super(props);
    this.keyUsages = -1;
    this.lifeIndicator = new LifeIndicator();
  }

  private renderUses(uses: string[]): ReactElement {
    return (
      <ul>
        { 
          Array.isArray(uses) ?
            uses.map((property: string) => {
              this.keyUsages++;
              return (
                <li 
                  key={ `uses-material-${this.keyUsages}` } 
                >
                  { property } 
                </li>
              );
            })
          : 
            <li>{ uses }</li>
        }
      </ul>
    );
  }

  render() {
    const { material } = this.props;

    return (
      <Col md={ 3 } className="mt-5">
        <Card className="card-material">
          <Card.Header className="card-header">
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
                    this.lifeIndicator.heartSymbol(material.life) 
                  : 
                    <label>
                      <b>Material</b>
                    </label>
                }
              </ListGroup.Item>
              
              <ListGroup.Item>
                { this.renderUses(material.uses) }
              </ListGroup.Item>

              <ListGroup.Item>
                <p>{ material.description }</p>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>

          <Card.Footer className="card-footer">
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