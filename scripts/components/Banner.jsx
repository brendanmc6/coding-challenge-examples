import React, { Component } from 'react';
import styled from 'styled-components';
import InfoModal from './InfoModal';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
    };
  }

  toggleInfo = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };

  render() {
    return (
      <BannerContainer>
        <InfoModal toggleInfo={this.toggleInfo} showInfo={this.state.showInfo} />
        <Column>
          <Vizzuality src="/images/vizzuality-logo.png" />
        </Column>
        <CenterColumn>
          <Title>
            Coding Challenge<br />
            <a href="https://github.com/Vizzuality/coding-challenge-examples/tree/cards-grid">
              cards-grid
            </a>
          </Title>
        </CenterColumn>
        <Column>
          <Info onClick={this.toggleInfo}>INFO</Info>
        </Column>
      </BannerContainer>
    );
  }
}

export default Banner;

const BannerContainer = styled.header`
  z-index: 2;
  height: 80px;
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  background-color: white;
  justify-content: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  @media (max-width: 560px) {
    height: 60px;
  }
`;

const Column = styled.div`
  flex: 1;
  height: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
`;

const CenterColumn = Column.extend`
  flex: 2 !important;
`;

const Info = styled.div`
  color: #64d1b8;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 2px;
  margin: 0px 25px 0px auto;
  &:hover {
    color: green;
  }
`;

const Vizzuality = styled.img`
  min-width: 70px;
  max-width: 200px;
  padding-left: 10px;
  @media (max-width: 860px) {
    max-width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  margin: 0px auto;
  font-weight: 400;
  text-align: center;
  & a {
    font-size: 16px;
    color: gray;
  }
  @media (max-width: 725px) {
    font-size: 30px;
  }
  @media (max-width: 560px) {
    font-size: 25px;
    line-height: 1;
  }
  @media (max-width: 480px) {
    & a {
      display: none;
    }
  }
  @media (max-width: 400px) {
    font-size: 20px;
  }
`;
