import React, { Component } from 'react';
import { Row, Col, Modal, Button } from 'react-bootstrap';
import CardNewsComponent from './card-news/card-news.component';
import { connect } from '../../imports/react-redux.import';
import { getNews } from '../../core/actions/news.actions';
import FormNewsComponent from './form-news/form-news.component';
import { NewsModel } from '../../core/models/news.model';

class HomeView extends Component<any,any> {
    
  constructor(props: any) {
    super(props);

    this.state = {
      show: false,
      shake: false
    };
  }

  componentDidMount() {
    this.props.getNews();
  }

  render() {
    const { userData ,news } = this.props;

    return (
      <>
        {/*<Row>
          <Col md={ 12 } className="text-center">
            <CardNewsComponent 
              role={ userData.role }
              news={ news }
            />
          </Col>
        </Row>*/}
        
        <Modal 
          show={ this.state.show }
          size="lg"
          centered
        >
          <FormNewsComponent
            initialValues=""
            submitActions={(formData: NewsModel) => {
              console.log(formData);
            }}
            cancel={ () => {} }
          />
        </Modal>
        <Button onClick={ () => { this.setState({ show: true }) } }>Modal</Button>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  getNews: () => dispatch(getNews())
});

const mapStateToProps = (state: any) => ({ 
  userData: state.userData,
  news: state.news
});

export default connect(mapStateToProps,mapDispatchToProps)(HomeView);