import React, { Component } from 'react';
import ListBowsComponent from './list-bows/list-bows.component';
import { connect } from '../../../imports/react-redux.import';
import { getBows } from '../../../core/actions/bows.actions';
import { UserDataModel } from '../../../core/models/user-data.model';
import TableBowsComponent from './table-bows/table-bows.component';
import LoadingIndicatior from '../../../shared/loading-indicator.shared';

class BowsView extends Component<any,any> {

  componentDidMount() {
    const { userData, getBows } = this.props;
    getBows(userData);
  }
  
  render() {
    const { bows, userData } = this.props;

    return (
      <>
        {
          bows ?
            userData.role === 0 ?
              <ListBowsComponent 
                bows={ bows }
              />
            :
              <TableBowsComponent 
                bows={ bows }
              />
          :
            <LoadingIndicatior />
        }
      </>
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