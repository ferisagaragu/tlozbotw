import React, { Component, ReactElement } from 'react';
import ItemBowsComponent from '../item-bows/item-bows.component';
import { BowModel } from '../../../../core/models/bows.model';
import Select, { makeAnimated } from '../../../../imports/react-select.import';
import { ListBowsPropsInterface, ListBowsStateInterface } from '../../../../core/interfaces/inventory-bows.interface';
import key from '../../../../core/key/react-elements.key';
import { Row } from 'react-bootstrap';

class ListBowsComponent extends Component<ListBowsPropsInterface,ListBowsStateInterface> {

  constructor(props: any) {
    super(props);

    this.state = {
      selectedBows: []
    };
  }
  
  private searchData(): Array<any> {
    const { bows } = this.props;
    const optionsOut: Array<any> = [];

    if (bows) {
      bows.forEach(element => {
        optionsOut.push({ value: element.id, label: element.name, bow: element });
      });
    }

    return optionsOut;
  }

  private renderData(bows: Array<BowModel>): Array<ReactElement> {
    return bows.map((bow: BowModel) => (
      <ItemBowsComponent 
        key={ key() }
        bow={ bow }
        onCheck={ (check: boolean) => this.onCheck(bow,check) }
      />
    ));
  }

  private onCheck(bow: BowModel, check: boolean): void {
    
  }

  private selectedBows(data: Array<any>): void {
    const selectedBows: Array<BowModel> = [];

    if (data) {
      data.forEach(element => {
        selectedBows.push(new BowModel(element.bow));
      });
    }

    this.setState({ selectedBows });
  }

  render() {
    const { bows } = this.props;
    const { selectedBows } = this.state;

    return (
      <>
        {
          bows &&
            <>
              <Select
                className="basic-multi-select col-md-12"
                components={ makeAnimated() }
                options={ this.searchData() }
                onChange={(data: Array<any>) => this.selectedBows(data) }
                noOptionsMessage={ () => 'No se encontraron conicidencias con ese Arco' }
                placeholder="Busca un Arco"
                isMulti
              />

              <Row>
                { 
                  selectedBows.length === 0 ?
                    this.renderData(bows) 
                  :
                    this.renderData(selectedBows)  
                }
              </Row>
            </>
        }
      </>
    );
  }
}

export default ListBowsComponent;