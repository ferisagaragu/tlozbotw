import React, { Component, ReactElement } from 'react';
import { TableEditMaterialInterface } from '../../../../core/interfaces/material-component.interface';
import { Table } from 'react-bootstrap';
import { MaterialModel } from '../../../../core/models/material.model';
import FormEditMaterialComponent from '../form-edit-material/form-edit-material.component';

class TableEditMaterialComponent extends Component<TableEditMaterialInterface,any> {

  private keyUsages: number;
  private materials: Array<MaterialModel>;

  constructor(props: any) {
    super(props);
    this.keyUsages = -1;
    this.materials = [];

    this.state = {
      material: {},
      showModal: false
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
        <td>{ index }</td>
        <td>
          <img 
            alt= { material.name }
            src= { material.img } 
          />
        </td>
        <td>{ material.name }</td>
        <td>{ material.life }</td>
        <td>{ this.renderUses(material.uses) }</td>
        <td>
          <FormEditMaterialComponent 
            initialValues={ material }
          />
        </td>
      </tr>
    ));
  }

  render() {
    const { materials }  = this.props
    this.materials = materials;

    return (
      <>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Foto</th>
              <th>Nombre</th>
              <th>Propiedades</th>
              <th>Uso</th>
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

export default TableEditMaterialComponent;