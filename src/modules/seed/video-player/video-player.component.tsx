import React, { Component } from 'react';
import { Player, ControlBar } from '../../../imports/video-react.import';
import { Col } from 'react-bootstrap';

class VideoPlayerComponent extends Component<any,any> {
  
  player: any;

  componentDidMount() {
    this.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  private handleStateChange(state: any): void {
    this.setState({
      player: state
    });
  }

  private onRef(player: any, onRef: Function): void {
    this.player = player;
    onRef(this.player);
  }

  render() {
    const { onRef, urlVideo } = this.props;

    return (
      <Col className="col-md-8">
        <Player
          ref={ (player: any) => this.onRef(player, onRef) }
        >
          <source src={ urlVideo } />
          <ControlBar autoHide={ true } />
        </Player>
      </Col>
    );
  }
}

export default VideoPlayerComponent;