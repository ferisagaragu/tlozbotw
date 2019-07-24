import React, { Component } from 'react';
import ListBowsComponent from './list-bows/list-bows.component';
import { connect } from '../../../imports/react-redux.import';
import { getBows } from '../../../core/actions/bows.actions';
import { UserDataModel } from '../../../core/models/user-data.model';

class BowsView extends Component<any,any> {

  componentDidMount() {
    const { userData, getBows } = this.props;
    getBows(userData);
  }
  
  render() {
    const { bows } = this.props;

    return (
      <ListBowsComponent 
        bows={ bows }
      />
    );
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  getBows: (userData: UserDataModel) => dispatch(getBows(userData))
});

const mapStateToProps = (state: any) => ({ 
  userData: state.userData,
  bows: state.bows
});

export default connect(mapStateToProps,mapDispatchToProps)(BowsView);