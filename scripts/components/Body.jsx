import styled from 'styled-components';
import React, { Component } from 'react';
import SortButton from './SortButton';
import Spinner from './Spinner';
import Card from './Card';
import Modal from './Modal';

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinner: false,
      sort: 'asc',
      page: 1,
      images: [],
      activeImage: {},
    };
  }

  componentDidMount() {
    this.fetchImages(this.state.page, this.state.sort);
  }

  setActiveImage = image => {
    this.setState({ activeImage: image });
  };

  fetchImages = (page, sort) => {
    this.setState({ spinner: true });
    const url = `https://jsonplaceholder.typicode.com/photos?_limit=24&_page=${page}&_sort=title&_order=${sort}`;
    fetch(url)
      .then(response => response.json())
      .then(json => {
        const images = [...this.state.images, ...json];
        this.setState({ spinner: false, page, images });
      });
  };

  // A callback for onScroll events to load more content.
  handleScroll = scroll => {
    // If you want to pre-load before the bottom, just subtract from scrollHeight
    const bottom =
      scroll.target.scrollHeight - scroll.target.scrollTop <= scroll.target.clientHeight;
    if (bottom && !this.state.spinner) {
      this.setState({ spinner: true });
      let { page } = this.state;
      const { sort } = this.state;
      page += 1;
      this.fetchImages(page, sort);
    }
  };

  handleSort = () => {
    let sort = '';
    this.state.sort === 'asc' ? (sort = 'desc') : (sort = 'asc');
    const images = [];
    const page = 1;
    this.setState({ sort, images, page });
    this.fetchImages(page, sort);
  };

  render() {
    const { images } = this.state;
    const cards = images.map(image => (
      <Card image={image} key={image.id} setActiveImage={this.setActiveImage} />
    ));
    return (
      <BodyContainer onScroll={this.handleScroll}>
        <Modal activeImage={this.state.activeImage} setActiveImage={this.setActiveImage} />
        <SortButton handleSort={this.handleSort} sort={this.state.sort} />
        <BodyContent>
          <CardsContainer>{cards}</CardsContainer>
        </BodyContent>
        {this.state.spinner && (
          <Footer>
            <Spinner />
          </Footer>
        )}
      </BodyContainer>
    );
  }
}

export default Body;

const Footer = styled.div`
  width: 80vw;
  height: 100px;
  display: flex;
  margin: 0 10vw;
  background: white;
  align-items: center;
  justify-content: center;
`;

const BodyContent = styled.div`
  width: 80vw;
  margin: 0px 10vw;
  background-color: white;
  @media (max-width: 700px) {
    width: 92vw;
    margin: 0px 4vw;
  }
  @media (max-width: 360px) {
    width: 100%;
    margin: 0px;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  padding: 10px;
  flex-flow: row wrap;
  justify-content: center;
  @media (max-width: 400px) {
    padding: 5px;
  }
`;

const BodyContainer = styled.section`
  width: 100%;
  height: 90vh;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #f7f7f7;
`;
