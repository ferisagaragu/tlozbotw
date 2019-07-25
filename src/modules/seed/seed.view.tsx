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
                urlVideo={ "https://redirector.googlevideo.com/videoplayback?expire=1564093572&ei=JNg5Xe7zAdmm1gKzx7_QDA&ip=95.179.160.161&id=o-AMA_tIu1o6tpbeZKgyvPYPwz1Q5Ky_UGpK_PJN8Fay8v&itag=22&source=youtube&requiressl=yes&mm=31%2C29&mn=sn-5hnedn7s%2Csn-5hne6nsy&ms=au%2Crdu&mv=m&mvi=2&pl=24&initcwndbps=5342500&mime=video%2Fmp4&ratebypass=yes&dur=1997.682&lmt=1494287230993356&mt=1564071802&fvip=1&beids=9466587&c=WEB&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIhAJLXcP8Cde4Fg1941XpYCrIQNHaDxX9_0ZLU2dUkim4SAiAFNu96JWdEpcPDcT8OvwBofWZXsqbX8Ez8YNi_-FcAIw%3D%3D&lsparams=mm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AHylml4wRgIhAOCZlh8tfSLM4owBhWhPPwZzStKIp-aME3VWier6QlmLAiEAw1c7Cn54BjHtt7S33FmzmeT7Dbu6-WOhVazdjKShZG4%3D&title=Semillas+Kolog+del+Lago+%7C+Zelda+Breath+of+the+Wild+en+Calzones+%2326" }
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