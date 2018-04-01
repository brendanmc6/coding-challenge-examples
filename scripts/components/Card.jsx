import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';

const Card = props => (
  <CardContainer onClick={() => props.setActiveImage(props.image)}>
    <Thumbnail src={props.image.thumbnailUrl} alt={props.image.title} />
    <Caption>{props.image.title}</Caption>
  </CardContainer>
);

Card.propTypes = {
  setActiveImage: PropTypes.func.isRequired,
  image: PropTypes.shape({
    albumId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;

const Thumbnail = styled.div`
  height: 150px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${props => props.src});
`;

const Caption = styled.figcaption`
  height: 50px;
  font-size: 14px;
  padding: 7px 10px;
  overflow: hidden;
  line-height: 20px;
  @media (max-width: 610px) {
    font-size: 12px;
  }
`;

const CardContainer = styled.div`
  width: 250px;
  margin: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  @media (max-width: 610px) {
    width: 150px;
  }
  @media (max-width: 400px) {
    margin: 5px;
  }
  @media (max-width: 360px) {
    margin: 1px;
  }
`;
