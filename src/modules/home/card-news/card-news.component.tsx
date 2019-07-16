import React, { Component, ReactElement } from 'react';
import { Card, Button } from 'react-bootstrap';
import key from '../../../core/key/react-elements.key';
import { NewsModel } from '../../../core/models/news.model';
import like from '../../../styles/img/like.png';
import dislike from '../../../styles/img/dislike.png';
import './card-news.css';

class CardNewsComponent extends Component<any> {
  
  private renderNews(): any {
    const { news, role } = this.props;

    if (news) {
      news.reverse();
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
              role === 1 &&
                <Button 
                  className="mr-2" 
                  variant="outline-info"
                >
                  Editar
                </Button>
            }
            
            <Button 
              className="mr-2" 
              variant="outline-dark">
              <img src={ like } />
            </Button>

            <Button variant="outline-dark">
              <img src={ dislike } />
            </Button>
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