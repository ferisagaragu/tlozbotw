import React, { Component } from 'react';
import VideoPlayerComponent from './video-player/video-player.component';
import ListSeedComponent from './list-seed/list-seed.component';
import { Row } from 'react-bootstrap';
import Select from '../../imports/react-select.import';
import { connect } from '../../imports/react-redux.import';
import { getCatalogRegions } from '../../core/actions/catalog.actions';
import { RegionModel } from '../../core/models/region.model';
import { PropagateLoader } from 'react-spinners';
import { getSeeds, clearSeeds } from '../../core/actions/seed.action';
import LoadingIndicatior from '../../shared/loading-indicator.shared';


class SeedView extends Component<any,any> {
    
  player: any;

  componentDidMount() {
    const { getCatalogRegions, getSeeds } = this.props;

    getCatalogRegions();
    getSeeds('jyhj8k3e');
  }

  private createOptions(): Array<any> {
    const { regionsCatalog } = this.props;
    const out:any = [];

    if(regionsCatalog) {
      regionsCatalog.forEach((element: RegionModel) => {
        out.push({ label: element.name, value: element.code });
      }); 
    }

    return out;
  }

  private setVideoTime(time: string): void {
    const minutes: number = +time.split(':')[0]; 
    const seconds: number = +time.split(':')[1];
    const timeOut: number = seconds + (minutes * 60);

    this.player.seek(timeOut);
    this.player.play();
  }

  private onChange(evt: any): void {
    this.props.clearSeeds();
    this.props.getSeeds(evt.value);
    this.player.load();
  }

  render() {
    const { regionsCatalog, seeds, videoUrl } = this.props;

    return (
      <>
        {
          regionsCatalog ?
              <Row className="mb-4">
                <Select
                  className="col-md-12"
                  defaultValue={ this.createOptions()[0] }
                  isClearable={ false }
                  isSearchable={ true }
                  options={ this.createOptions() }
                  onChange={ (evt: any) => this.onChange(evt) }
                />
              </Row>
            :
              <Row className="mb-4 justify-content-md-center">
                <PropagateLoader
                  color="#BFA069"
                />
              </Row>   
        }

        {
          (seeds && videoUrl) ?
            <Row>
              <VideoPlayerComponent 
                urlVideo={ videoUrl }
                onRef={ (player: any) => this.player = player }
              />

              <ListSeedComponent 
                seeds={ seeds }
                onClickTime={ (evt: string) => this.setVideoTime(evt) } 
                onSeedChange={ (evt: boolean) => { console.log(evt); } }
              />
            </Row>
          :
            <LoadingIndicatior />  
        }
        
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({ 
  userData: state.userData,
  regionsCatalog: state.regionsCatalog,
  seeds: state.seeds,
  videoUrl: state.videoUrl
});

const mapDispatchToProps = (dispatch: Function) => ({
  getCatalogRegions: () => dispatch(getCatalogRegions()),
  getSeeds: (regionId: string) => dispatch(getSeeds(regionId)),
  clearSeeds: () => dispatch(clearSeeds())
});

export default connect(mapStateToProps,mapDispatchToProps)(SeedView);