import React, { Component, ReactElement } from 'react';
import { Row } from 'react-bootstrap';
import { MaterialModel } from '../../../core/models/material.model';
import { connect } from '../../../imports/react-redux.import';
import { getMaterials } from '../../../core/actions/material.actions';
import ItemMaterialComponent from './item-material/item-material.component';
import TableEditMaterialComponent from './table-material/table-material.component';
import { MaterialInterface } from '../../../core/interfaces/inventory.interface';

class MaterialView extends Component<MaterialInterface> {
  
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
        <TableEditMaterialComponent 
          materials={ this.materials }
        />
        { /*materials ? 
            this.renderData() 
          : 
            <Col>
              <ProgressBar 
                animated 
                now={100} 
                variant="warning" 
              />
            </Col>*/ 
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

export default connect(mapStateToProps,mapDispatchToProps)(MaterialView);