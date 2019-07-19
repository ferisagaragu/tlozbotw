import React, { Component, ReactElement } from 'react';
import { TableMaterialPropsInterface, TableMaterialStateInterface } from '../../../../core/interfaces/inventory-materials.interface';
import { Table, Modal, Button } from 'react-bootstrap';
import { MaterialModel } from '../../../../core/models/material.model';
import FormMaterialComponent from '../form-material/form-material.component';
import heartSymbol from '../../../../shared/life-indicator.shared';
import { materialUsesList } from '../../../../shared/material-uses.shared';
import key from '../../../../core/key/react-elements.key';
import '../table-material/table-material.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TableEditMaterialComponent extends Component<TableMaterialPropsInterface,TableMaterialStateInterface> {

  private materials: Array<MaterialModel>;

  constructor(props: TableMaterialPropsInterface) {
    super(props);
    this.materials = [];

    this.state = {
      material: new MaterialModel({}),
      show: false
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
        <tr key={ key() }>
          <td>
            { index }
          </td>

          <td>
            <img 
              className="img-icon"
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
          
          <td className="list-uses">
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
    const { materials }  = this.props;
    const { material } = this.state;
    const { id, name } = material;
    this.materials = materials;

    return (
      <>
        <Modal 
          show={ this.state.show }
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title>
              { `#${id} ${name}` } 
            </Modal.Title>
          </Modal.Header>
          
          <Modal.Body>
            <FormMaterialComponent 
              initialValues={ material }
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

        { 
          !materials &&  
            <div className="text-center load-symbol">
              <FontAwesomeIcon className="loading" icon="circle-notch" />
            </div>
        }
      </>
    );
  }

}

export default TableEditMaterialComponent;