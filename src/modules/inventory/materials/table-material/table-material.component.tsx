import React, { Component, ReactElement } from 'react';
import { TableEditMaterialInterface } from '../../../../core/interfaces/material-component.interface';
import { Table, Modal, Button } from 'react-bootstrap';
import { MaterialModel } from '../../../../core/models/material.model';
import LifeIndicator from '../../../../shared/life-indicator.shared';
import FormMaterialComponent from '../form-material/form-material.component';
import { connect } from '../../../../imports/react-redux.import';
import { updateMaterials } from '../../../../core/actions/material.actions';

class TableEditMaterialComponent extends Component<TableEditMaterialInterface,any> {

  private keyUsages: number;
  private materials: Array<MaterialModel>;
  private lifeIndicator: LifeIndicator;

  constructor(props: any) {
    super(props);
    this.keyUsages = -1;
    this.materials = [];
    this.lifeIndicator = new LifeIndicator();

    this.state = {
      material: {}
    }
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
    return this.materials.map((material: MaterialModel, index: number) => (
      <tr key={ `table-${JSON.stringify(material)}` }>
        <td>
          { index }
          { material.id = index }
        </td>
        <td>
          <img 
            alt= { material.name }
            src= { material.img } 
          />
        </td>
        <td>{ material.name }</td>
        <td>
          { 
            material.life !== 0 ?
              this.lifeIndicator.heartSymbol(material.life) 
            :
              <label>
                <b>Material</b>
              </label>
          }
        </td>
        <td>{ }</td>
        <td>{ material.description }</td>
        <td>
          <Button 
            variant="outline-info" 
            onClick={ () => this.selectedItem(material) } 
          >
            Editar
          </Button>
        </td>
      </tr>
    ));
  }

  private selectedItem(material: MaterialModel) {
    this.setState({
      material: material,
      show: true
    });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
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
              submitActions={ (values: MaterialModel) => {
                this.props.updateMaterials(values);
                this.setState({
                  show: false
                });
              }}
              cancel={ () => this.setState({ show: false }) }
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