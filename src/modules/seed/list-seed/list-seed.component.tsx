import React, { Component } from 'react';
import ItemSeedComponent from '../item-seed/item-seed.component';
import { Col } from 'react-bootstrap';
import { ListSeedPropsInterface } from '../../../core/interfaces/seed.interface';
import key from '../../../core/key/react-elements.key';
import './list-seed.css';

class ListSeedComponent extends Component<ListSeedPropsInterface> {
  
  private renderData() {
    const { seeds, onClickTime, onSeedChange } = this.props;

    return seeds.map((seed: any, index: number) => (
      <ItemSeedComponent 
        key={ key() }
        title={ `#${index + 1} Semilla` } 
        buttonLabel={ seed.second }
        status={ true }
        onClickTime={ (evt: string) => onClickTime(evt) }
        onSeedChange={ (evt: boolean) => onSeedChange(evt) }
      />
    ));
  }

  render() {
    return (
      <Col className="scroll-seed" md={ 4 }>
        { this.renderData() }
      </Col> 
    );
  }
}

export default ListSeedComponent;