import React, { Component } from 'react';
import photo from '../styles/img/photo.png';
import photoOff from '../styles/img/photo-off.png';

interface props {
  check: boolean;
  onCheck: Function;
}

interface state {
  selected: boolean;
}

class IndicatorPhoto extends Component<props,state> {
  
  constructor(props: any) {
    super(props);

    this.state = {
      selected: this.props.check
    };
  }

  render() {
    const { onCheck } = this.props;
    const { selected } = this.state;

    return (
      <div 
        className="img-photo"
        onClick={ () => { 
          this.setState({ selected: !selected }) 
          onCheck( !selected );
        }}
      >
        {
          selected ?
            <img 
              className="float-right"
              alt="camera"
              src={ photo } 
            />
          :
            <img 
              className="float-right"
              alt="camera"
              src={ photoOff } 
            />
        }
      </div>
    );
  }

}

export default IndicatorPhoto;