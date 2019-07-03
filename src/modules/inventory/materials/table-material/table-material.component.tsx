import React, { Component, ReactElement } from 'react';
import { TableMaterialInterface } from '../../../../core/interfaces/material-component.interface';
import { Table, Modal, Button } from 'react-bootstrap';
import { MaterialModel } from '../../../../core/models/material.model';
import FormMaterialComponent from '../form-material/form-material.component';
import { connect } from '../../../../imports/react-redux.import';
import { updateMaterials } from '../../../../core/actions/material.actions';
import heartSymbol from '../../../../shared/life-indicator.shared';
import { materialUsesList } from '../../../../shared/material-uses.shared';
import { tableRowKey } from '../../../../core/key/react-elements.key';

class TableEditMaterialComponent extends Component<TableMaterialInterface,any> {

  private materials: Array<MaterialModel>;

  constructor(props: TableMaterialInterface) {
    super(props);
    this.materials = [];

    this.state = {
      material: {}
    }
  }

  //ACTIOS
  private selectedItem(material: MaterialModel) {
    this.setState({
      material: material
    });
    this.showModal(true);
  }

  private onSubmint(values: MaterialModel): void {
    this.props.updateMaterials(values);
    this.showModal(false);
  }

  private showModal(show: boolean) {
    this.setState({
      show
    });
  }

  //RENDERS
  private renderData(): Array<ReactElement> {
    return this.materials.map((material: MaterialModel, index: number) => {
      material.id = index;
      return(
        <tr key={ tableRowKey() }>
          <td>
            { index }
          </td>

          <td>
            <img 
              alt= { material.name }
              src= { material.img } 
            />
          </td>

          <td>
            { material.name }
          </td>

          <td>
            { 
              material.life !== 0 ?
                heartSymbol(material.life) 
              :
                <label>
                  <b>Material</b>
                </label>
            }
          </td>
          
          <td>
            { materialUsesList(material) }
          </td>
          
          <td>
            { material.description }
          </td>
          
          <td>
            <Button 
              variant="outline-info" 
              onClick={ () => this.selectedItem(material) } 
            >
              Editar
            </Button>
          </td>
        </tr>
      );
    });
  }

  render() {
    const { materials }  = this.props
    this.materials = materials;

    return (
      <>
        <Modal 
          show={this.state.show}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title>
              { `#${this.state.material.id} ${this.state.material.name}` } 
            </Modal.Title>
          </Modal.Header>
          
          <Modal.Body>
            <FormMaterialComponent 
              initialValues={ this.state.material }
              submitActions={ (values: MaterialModel) => this.onSubmint(values) }
              cancel={ () => this.showModal(false) }
            />
          </Modal.Body>
        </Modal>

        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Foto</th>
              <th>Nombre</th>
              <th>Propiedades</th>
              <th>Uso</th>
              <th>Descripcion</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            { materials && this.renderData() }
          </tbody>
        </Table>
      </>
    );
  }

}

const mapDispatchToProps = (dispatch: Function) => ({
  updateMaterials: (data: MaterialModel) => (dispatch(updateMaterials(data)) )
});

const TableEditMaterialComponentConnect = connect(null,mapDispatchToProps)(TableEditMaterialComponent);

export default TableEditMaterialComponentConnect;