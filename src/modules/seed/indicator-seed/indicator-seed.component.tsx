import React, { Component } from 'react';
import seed from '../../../styles/img/seed.png';
import seedOut from '../../../styles/img/seed_out.png';
import { IndicatorSeedPropsInterface, IndicatorSeedStateInterface } from '../../../core/interfaces/seed.interface';
import './indicator-seed.css';

class IndicatorSeedComponent extends Component<IndicatorSeedPropsInterface,IndicatorSeedStateInterface> {
    
  constructor(props: IndicatorSeedPropsInterface) {
    super(props);

    this.state = {
      isCheck: props.isCheck
    };  
  }

  private onChange(evt: boolean, onChange: Function): void {
    this.setState({ isCheck: !evt }); 
    onChange(!evt);
  }

  render() {
    const { onChange } = this.props;
    const { isCheck } = this.state;

    return (
      <>
        {
          isCheck ? 
            <img
              className="seed-pointer" 
              alt="seed"
              src={ seed }
              onClick={ () => this.onChange(isCheck, onChange) }
            />
          :
            <img 
              className="seed-pointer"
              alt="seed"
              src={ seedOut }
              onClick={ () => this.onChange(isCheck, onChange) }
            />
        }
      </>
    );
  }
}

export default IndicatorSeedComponent;