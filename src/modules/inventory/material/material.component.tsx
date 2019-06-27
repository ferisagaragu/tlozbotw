import React, { Component, ReactElement } from 'react';
import { Row, Col, Card, ListGroup } from 'react-bootstrap';
import { MaterialModel } from '../../../core/models/material.model';
import LifeIndicator from '../../../shared/life-indicator.shared';
import { connect } from '../../../imports/react-redux.import';
import { getMaterials } from '../../../core/actions/material.actions';

class MaterialComponent extends Component<any,any> {
  
  private materials: Array<MaterialModel>;
  private lifeIndicator: LifeIndicator;

  private keyUsages: number;

  constructor(props: any) {
    super(props);
    
    this.materials = [];
    this.keyUsages = 0;
    this.lifeIndicator = new LifeIndicator();
  }

  componentDidMount() {
    this.props.getMaterials();
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

  private renderData(): Array<ReactElement> {
    return this.materials.map((material: MaterialModel) => (
      <Col md={3} className="mt-5" key={JSON.stringify(material)}>
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
                { this.lifeIndicator.heartSymbol(material.life) }
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
              material.life.length !== 0 &&
              <>
                <input type="checkbox" className="float-right"/>

                <img 
                  className="float-right"
                  width="50px"
                  height="50px"
                  alt="camera"
                  src="https://c-6rtwjumjzx7877x24lfrjujinfx2ehzwx78jhisx2ehtr.g00.gamepedia.com/g00/3_c-6ejqif.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2flfrjujinf.hzwx78jhis.htrx2fejqif_lfrjujinf_jsx2f0x2f00x2fGtyB_Hfrjwf_Wzsj_Nhts.uslx3fajwx78ntsx3di7fg95k98969i4k0i77853506j6h82hhx26n65h.rfwpx3dnrflj_$/$/$/$/$" 
                />
              </> 
            }
          </Card.Footer>
        </Card>
      </Col>
    ));
  }
  
  render() {
    const { materials } = this.props;
    this.materials = materials;

    return (
      <Row>
        { materials ? this.renderData() : <div>Cargando datos...</div> }
      </Row>
    );
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  getMaterials: () => dispatch(getMaterials())
});

const mapStateToProps = (state: any) => ({ 
  materials: state.materials
});

const MaterialComponentConnect = connect(mapStateToProps,mapDispatchToProps)(MaterialComponent);
export default MaterialComponentConnect;