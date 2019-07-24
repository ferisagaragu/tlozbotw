import React, { Component, ReactElement } from 'react';
import ItemBowsComponent from '../item-bows/item-bows.component';
import { BowModel } from '../../../../core/models/bows.model';
import Select, { makeAnimated } from '../../../../imports/react-select.import';
import { ListBowsPropsInterface, ListBowsStateInterface } from '../../../../core/interfaces/inventory-bows.interface';
import key from '../../../../core/key/react-elements.key';
import { Row } from 'react-bootstrap';
import LoadingIndicatior from '../../../../shared/loading-indicator.shared';

class ListBowsComponent extends Component<ListBowsPropsInterface,ListBowsStateInterface> {
  
  bowsModel: Array<BowModel>;

  constructor(props: any) {
    super(props);
    this.bowsModel = [];

    this.state = {
      selectedBows: []
    };
  }
  
  private searchData(): Array<any> {
    const optionsOut: Array<any> = [];

    if (this.bowsModel) {
      this.bowsModel.forEach(element => {
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
    this.bowsModel = bows;

    return (
      <>
        {
          this.bowsModel ?
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
                    this.renderData(this.bowsModel) 
                  :
                    this.renderData(selectedBows)  
                }
              </Row>
            </>
          :
            <LoadingIndicatior />
        }
      </>
    );
  }
}

export default ListBowsComponent;