import React, { Component } from 'react';
//import Select from '../../../../imports/react-select.import';
import { Table } from 'react-bootstrap';

class TableBowsComponent extends Component<any,any> {
  render() {
    const { bows } = this.props;

    return (
      <>
        {
          bows &&
            <> 
              {/*<Select
                className="col-md-12 mb-3"
                noOptionsMessage={ () => 'No se encontraron conicidencias con ese Arco' }
                placeholder="Busca un Arco"
                value={this.state.selectedOption}
                onChange={(data: any) => this.onChangeSelect(data.value) {} }
                options={ this.loadOptions() null }
              />*/}

              <Table responsive>
                <thead>
                  <tr>
                    <th>Foto</th>
                    <th>Nombre</th>
                    <th>Daño</th>
                    <th>Descripcion</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>  
                  { /*materials && this.renderData()*/ }
                </tbody>
              </Table>
            </>  
        }
      </>
    );
  }
}

export default TableBowsComponent;