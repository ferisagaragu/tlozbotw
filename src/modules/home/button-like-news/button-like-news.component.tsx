import React, { Component } from 'react';
import { ButtonLikeNewsPropsInterface, ButtonLikeNewsStateInterface } from '../../../core/interfaces/home.interface';
import './button-like-news.css';

class ButtonLikeNewsComponent extends Component<ButtonLikeNewsPropsInterface, ButtonLikeNewsStateInterface> {
  
  constructor(props: any) {
    super(props);

    this.state = {
      likeAnimation: this.props.isLike 
        ? 'heart selected-like' : 
          'heart-out selected-dislike'
    };
  }

  private onLikeAnimation() {
    if (this.state.likeAnimation.includes("selected-like")) {
      this.setState({ likeAnimation: 'heart-out is_animating-dislike selected-dislike' });
    } else {
      this.setState({ likeAnimation: 'heart is_animating-like selected-like' });
    }
  }

  render() {
    const { onLike, likeCount } = this.props;
    const { likeAnimation } = this.state;

    return (
      <div
        onClick={ () => this.onLikeAnimation() }
        className={ likeAnimation }
        onAnimationEnd={ () => onLike() }
      >
        <b>{ likeCount }</b>
      </div>
    );
  }
}

export default ButtonLikeNewsComponent;