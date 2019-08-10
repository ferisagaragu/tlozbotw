import React, { Component } from 'react';
import loading from '../styles/img/loading.gif';

class LoadingIndicatior extends Component {
  render() {
    return (
      <div className="text-center col-md-12">
        <img alt="loading" src={ loading } />
        <h1>Cargando...</h1> 
      </div>
    );
  }
}

export default LoadingIndicatior;