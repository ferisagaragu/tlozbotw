import React, { Component } from 'react';
import { Row, Col, Modal, Button } from 'react-bootstrap';
import CardNewsComponent from './card-news/card-news.component';
import { connect } from '../../imports/react-redux.import';
import { getNews, updateNews, createNews, like, deleteNews } from '../../core/actions/news.actions';
import FormNewsComponent from './form-news/form-news.component';
import { NewsModel } from '../../core/models/news.model';
import { UserDataModel } from '../../core/models/user-data.model';
import { HomePropsIterface, HomeStateIterface } from '../../core/interfaces/home.interface';
import swal from '../../shared/swal.shared';

class HomeView extends Component<HomePropsIterface,HomeStateIterface> {
    
  constructor(props: any) {
    super(props);

    this.state = {
      show: false,
      selectedNew: new NewsModel({})
    };
  }

  componentDidMount() {
    this.props.getNews(this.props.userData);
  }

  private onSubmitForm(formData: NewsModel): void {
    if (formData.id === "") {
      this.props.createNews(formData);
    } else {
      this.props.updateNews(formData);
    }
    
    this.setState({
      show: false
    });
  }

  private onShowModal(selectedNew: NewsModel): void {
    this.setState({ 
      show: true,
      selectedNew
    });
  }

  private confirmDelete(selectedNew: NewsModel): void {
    swal.fire({
      title: '¿Deseas eliminar la publicacion?',
      text: "El registro se eliminara perpetuamente",
      type: 'error',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#d33'
    }).then((result) => {
      this.props.deleteNews(selectedNew);
    });
  }

  render() {
    const { userData, news, like } = this.props;
    const { show, selectedNew } = this.state;

    return (
      <>
        {
          userData.role === 1 &&
            <Button 
              className="mb-3 text-center"
              variant="outline-success"
              onClick={ () => { this.setState({
                show: true,
                selectedNew: new NewsModel({ })
              }) } }
            >
              Crear publicación
            </Button>
        }

        <Modal 
          show={ show }
          size="lg"
          centered
        >
          <FormNewsComponent
            initialValues={ selectedNew }
            submitActions={ (formData: NewsModel) => this.onSubmitForm(formData) }
            cancel={ () => this.setState({show: false}) }
          />
        </Modal>

        <Row>
          <Col md={ 12 } className="text-center">
            <CardNewsComponent 
              userData={ userData }
              news={ news }
              onEditNews={ (selectedNew: NewsModel) => this.onShowModal(selectedNew) }
              onDeleteNews={ (selectedNew: NewsModel) => this.confirmDelete(selectedNew) }
              onLike={ (element: any, userData: any) => like(element,userData) }
            />
          </Col>
        </Row>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  getNews: (data: UserDataModel) => dispatch(getNews(data)),
  updateNews: (data: NewsModel) => dispatch(updateNews(data)),
  createNews: (data: NewsModel) => dispatch(createNews(data)),
  deleteNews: (data: NewsModel) => dispatch(deleteNews(data)),
  like: (data: NewsModel, userData: UserDataModel) => dispatch(like(data,userData)),
});

const mapStateToProps = (state: any) => ({ 
  userData: state.userData,
  news: state.news
});

export default connect(mapStateToProps,mapDispatchToProps)(HomeView);