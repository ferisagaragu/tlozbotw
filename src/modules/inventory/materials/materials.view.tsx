import React, { Component, ReactElement } from 'react';
import { Row } from 'react-bootstrap';
import { MaterialModel } from '../../../core/models/material.model';
import { connect } from '../../../imports/react-redux.import';
import { getMaterials, updateMaterials, selectMaterial } from '../../../core/actions/material.actions';
import ItemMaterialComponent from './item-material/item-material.component';
import TableEditMaterialComponent from './table-material/table-material.component';
import { MaterialPropsInterface, MaterialStateInterface } from '../../../core/interfaces/inventory-materials.interface';
import { UserDataModel } from '../../../core/models/user-data.model';
import key from '../../../core/key/react-elements.key';
import Select, { makeAnimated } from '../../../imports/react-select.import';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MaterialView extends Component<MaterialPropsInterface,MaterialStateInterface> {
  
  private materials: Array<MaterialModel>;

  constructor(props: any) {
    super(props);
    this.materials = [];

    this.state = {
      selectedMaterials: []
    };

  }

  componentDidMount() {
    const { userData, getMaterials } = this.props;
    getMaterials(userData);
  }

  private renderData(materials: Array<MaterialModel>): Array<ReactElement> {
    const { userData ,selectMaterial } = this.props;

    return materials.map((material: MaterialModel) => (
      <ItemMaterialComponent 
        key={ key() }
        material={ material }
        selectMaterial={ (material: MaterialModel) => selectMaterial(userData, material) }
      />
    ));
  }

  private createItems(): Array<MaterialModel> {
    const optionsOut: Array<any> = [];

    if (this.materials) {
      this.materials.forEach(element => {
        optionsOut.push({ value: element.id, label: element.name, material: element });
      });
    }
    return optionsOut;
  }

  private selectedMaterials(data: Array<any>): void {
    const materialsOut: Array<MaterialModel> = [];

    if (data) {
      data.forEach(element => {
        materialsOut.push(element.material);
      });
    }
    
    this.setState({ selectedMaterials: materialsOut });
  }
  
  render() {
    const { materials, userData } = this.props;
    const { selectedMaterials } = this.state;
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
            materials ?
              <>
                <Select
                  className="basic-multi-select col-md-12"
                  components={ makeAnimated() }
                  options={ this.createItems() }
                  onChange={(data: Array<any>) => this.selectedMaterials(data) }
                  noOptionsMessage={ () => 'No se encontraron conicidencias con ese Material' }
                  placeholder="Busca un Material"
                  isMulti
                />

                {
                  materials && (selectedMaterials.length === 0) ? 
                    this.renderData(this.materials)
                  :
                    this.renderData(selectedMaterials)
                }
              </>
            : 
              <div className="text-center load-symbol">
                <FontAwesomeIcon className="loading" icon="circle-notch" />
              </div>
        }
      </Row>
    );
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  getMaterials: (userData: UserDataModel) => dispatch(getMaterials(userData)),
  updateMaterials: (data: MaterialModel) => dispatch(updateMaterials(data)),
  selectMaterial: (userData: UserDataModel, data: MaterialModel) => dispatch(selectMaterial(userData ,data)),
});

const mapStateToProps = (state: any) => ({ 
  userData: state.userData,
  materials: state.materials
});

export default connect(mapStateToProps,mapDispatchToProps)(MaterialView);