import React, { Component, ReactElement } from 'react';
import { Row, Col, ProgressBar } from 'react-bootstrap';
import { MaterialModel } from '../../../core/models/material.model';
import { connect } from '../../../imports/react-redux.import';
import { getMaterials } from '../../../core/actions/material.actions';
import ItemMaterialComponent from './item-material/item-material.component';

class MaterialComponent extends Component<any,any> {
  
  private materials: Array<MaterialModel>;

  constructor(props: any) {
    super(props);
    this.materials = [];
  }

  componentDidMount() {
    this.props.getMaterials();
  }

  private renderData(): Array<ReactElement> {
    return this.materials.map((material: MaterialModel) => (
      <ItemMaterialComponent 
        key={ JSON.stringify(material) }
        material={ material }
      />
    ));
  }
  
  render() {
    const { materials } = this.props;
    this.materials = materials;

    return (
      <Row>
        { materials ? 
            this.renderData() 
          : 
            <Col>
              <ProgressBar 
                animated 
                now={100} 
                variant="warning" 
              />
            </Col> 
        }
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