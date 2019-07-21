import React, { Component } from 'react';
import photo from '../../../../styles/img/photo.png';
import photoOff from '../../../../styles/img/photo-off.png';
import './indicator-photo-material.css';

class IndicatorPhotoMaterialComponent extends Component<any,any> {
  
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

export default IndicatorPhotoMaterialComponent;