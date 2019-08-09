import React, { Component, ReactElement } from 'react';
import { TableMaterialPropsInterface } from '../../../../core/interfaces/inventory-materials.interface';
import { Table, Modal, Button } from 'react-bootstrap';
import { MaterialModel } from '../../../../core/models/material.model';
import FormMaterialComponent from '../form-material/form-material.component';
import heartSymbol from '../../../../shared/life-indicator.shared';
import key from '../../../../core/key/react-elements.key';
import Select from '../../../../imports/react-select.import';
import rupee from '../../../../styles/img/rupe.png';
import ListUsesMaterial from '../list-uses-material/list-uses-material';
import '../table-material/table-material.css';
import LoadingIndicatior from '../../../../shared/loading-indicator.shared';

class TableEditMaterialComponent extends Component<TableMaterialPropsInterface,any> {

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
  private selectedItem(material: MaterialModel): void {
    this.setState({
      material: material,
      selectedOption: null
    });
    this.showModal(true);
  }

  private onSubmint(values: MaterialModel): void {
    this.props.updateMaterials(values);
    this.showModal(false);
  }

  private showModal(show: boolean): void {
    this.setState({
      show
    });
  }

  private onChangeSelect(data: MaterialModel) {
    this.selectedItem(data);
  }

  private loadOptions(): Array<any> {
    const options: Array<any> = [];

    if (this.materials) {
      this.materials.forEach((material: MaterialModel) => {
        options.push(
          { 
            value: material, 
            label: material.name 
          }
        );
      });
    }

    return options;
  }

  //RENDERS
  private renderData(): Array<ReactElement> {
    return this.materials.map((material: MaterialModel) => {
      return(
        <tr key={ key() }>
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
              +material.life !== 0 ?
                heartSymbol(material.life) 
              :
                <label>
                  <b>Material</b>
                </label>
            }
          </td>

          <td>
            { material.value }
            <img alt="rupee" src={ rupee } />
          </td>
          
          <td className="list-uses">
            <ListUsesMaterial 
              material={ material }
            />
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
    const { name } = material;
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
              { `${name}` } 
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

        {
          materials ?
            <> 
              <Select
                className="col-md-12 mb-3"
                noOptionsMessage={ () => 'No se encontraron conicidencias con ese Material' }
                placeholder="Busca un Material"
                value={this.state.selectedOption}
                onChange={(data: any) => this.onChangeSelect(data.value) }
                options={ this.loadOptions() }
              />

              <Table responsive>
                <thead>
                  <tr>
                    <th>Foto</th>
                    <th>Nombre</th>
                    <th>Propiedades</th>
                    <th>Valor</th>
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
          :
            <LoadingIndicatior />
        }
      </>
    );
  }

}

export default TableEditMaterialComponent;