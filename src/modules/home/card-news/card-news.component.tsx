import React, { Component, ReactElement, useRef } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import key from '../../../core/key/react-elements.key';
import { NewsModel } from '../../../core/models/news.model';
import './card-news.css';

class CardNewsComponent extends Component<any,any> {
  
  constructor(props: any) {
    super(props);

    this.state = {
      likeAnimation: 'heart'
    };
  }

  private onLikeAnimation(element: NewsModel) {
    if (this.state.likeAnimation.includes("selected-like")) {
      this.setState({ likeAnimation: 'heart is_animating-dislike selected-dislike' });
    } else {
      this.setState({ likeAnimation: 'heart is_animating-like selected-like' });
    }
    this.props.onLike(element);
  }

  private renderNews(): Array<ReactElement> | void {
    const { news, role, onEditNews, onDeleteNews } = this.props;

    if (news) {
      return news.map((element: NewsModel) => (
        <Card className="text-left card-shadow mb-5" key={ key() }>
          <Card.Img 
            className="card-img"
            variant="top" 
            src={ element.img }
            alt={ element.title } 
          />

          <Card.Body>
            <Card.Title>{ element.title }</Card.Title>
            <Card.Text className="card-text">
              { element.information }
            </Card.Text>
          </Card.Body>

          <Card.Footer className="text-right">
            {
              role === 1 ?
                <>
                  <Button 
                    className="mr-2" 
                    variant="outline-info"
                    onClick={ () => onEditNews(element) }
                  >
                    Editar
                  </Button>

                  <Button
                    variant="outline-danger"
                    onClick={ () =>  onDeleteNews(element) }
                  >
                    Eliminar
                  </Button>
                </>
              :
                <Row
                  className="justify-content-end mr-3"
                >
                  <div
                    onClick={ () => this.onLikeAnimation(element) }
                    className={ this.state.likeAnimation }
                  > 
                    <b>{ element.like }</b>
                  </div>
                </Row>
            }          
          </Card.Footer>
        </Card>
      ));
    }

  }

  render() {
    return (
      <>
        { 
          !this.props.news ?   
            <>
              <h1>Cargando...</h1>  
            </> 
          :
            this.renderNews()
        }
      </>
    );
  }
}

export default CardNewsComponent;