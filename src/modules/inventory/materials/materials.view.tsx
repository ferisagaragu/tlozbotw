import React, { Component, ReactElement } from 'react';
import { Row, Col, ProgressBar } from 'react-bootstrap';
import { MaterialModel } from '../../../core/models/material.model';
import { connect } from '../../../imports/react-redux.import';
import { getMaterials, updateMaterials } from '../../../core/actions/material.actions';
import ItemMaterialComponent from './item-material/item-material.component';
import TableEditMaterialComponent from './table-material/table-material.component';
import { MaterialPropsInterface } from '../../../core/interfaces/inventory-materials.interface';

class MaterialView extends Component<MaterialPropsInterface> {
  
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
    const { materials, userData } = this.props;
    this.materials = materials;

    return (
      <Row>
        {
          userData.role === 1 ? 
            <TableEditMaterialComponent 
              materials={ this.materials }
              updateMaterials={ this.props.updateMaterials }
            />
          :
            <>
              { materials ? 
                this.renderData() 
              : 
                <Col>
                  <ProgressBar 
                    animated 
                    now={ 100 } 
                    variant="warning" 
                  />
                </Col> 
              }
            </>
        }
      </Row>
    );
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  getMaterials: () => dispatch(getMaterials()),
  updateMaterials: (data: MaterialModel) => dispatch(updateMaterials(data))
});

const mapStateToProps = (state: any) => ({ 
  userData: state.userData,
  materials: state.materials
});

export default connect(mapStateToProps,mapDispatchToProps)(MaterialView);