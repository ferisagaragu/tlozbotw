import React, { Component, ReactElement, useRef } from 'react';
import { Card, Button, Row } from 'react-bootstrap';
import key from '../../../core/key/react-elements.key';
import { NewsModel } from '../../../core/models/news.model';
import './card-news.css';
import ButtonLikeNewsComponent from '../button-like-news/button-like-news.component';

class CardNewsComponent extends Component<any,any> {
  
  private renderNews(): Array<ReactElement> | void {
    const { news, userData, onEditNews, onDeleteNews, onLike } = this.props;

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
              userData.role === 1 ?
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
                  <ButtonLikeNewsComponent 
                    likeCount={ element.like }
                    onLike={ () => onLike(element, userData) }
                    isLike={ element.isLike }
                  />
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