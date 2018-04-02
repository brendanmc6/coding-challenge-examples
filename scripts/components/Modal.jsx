import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Spinner from './Spinner';

const Modal = props => {
  // To keep it clean, conditional renders are in the component rather than the parent.
  // Rather than creating a "showModal" state, we can just use the activeImage object (if contains data, render)
  if (props.activeImage.id) {
    return (
      <Background>
        {/* Pass an empty object to unmount the modal */}
        <Close onClick={() => props.setActiveImage({})}>
          <i className="material-icons">close</i>
        </Close>
        <ImageContainer alt={props.activeImage.title}>
          <Image src={props.activeImage.url} alt={props.activeImage.title} />
          {/* It might be better to conditionally render the spinner and placeholder,
              but covering them up keeps it simple */}
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
          <Placeholder src={props.activeImage.thumbnailUrl} />
        </ImageContainer>
        <Caption>{props.activeImage.title}</Caption>
      </Background>
    );
  }
  return null;
};
export default Modal;

Modal.propTypes = {
  setActiveImage: PropTypes.func.isRequired,
  activeImage: PropTypes.shape({
    albumId: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string,
    url: PropTypes.string,
    thumbnailUrl: PropTypes.string,
  }).isRequired,
};

const SpinnerContainer = styled.div`
  z-index: 1;
  width: 100%;
  bottom: 0px;
  display: flex;
  position: absolute;
  justify-content: center;
`;

const Placeholder = styled.img`
  left: 0px;
  z-index: 0;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Image = styled.img`
  z-index: 2;
  width: 100%;
  height: auto;
  position: relative;
`;

const Close = styled.div`
  color: white;
  width: 600px;
  display: flex;
  flex-shrink: 0;
  margin: 10px 10px 0px 10px;
  & i {
    font-size: 40px;
    cursor: pointer;
    margin-left: auto;
  }
  & i:hover {
    color: #64d1b8;
  }
  @media (max-width: 620px) {
    width: calc(100% - 20px);
  }
`;

const Caption = styled.div`
  width: 600px;
  padding: 10px;
  background-color: white;
  margin: 0px 10px 10px 10px;
  border-radius: 0px 0px 4px 4px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  @media (max-width: 620px) {
    width: calc(100% - 20px);
  }
`;

const ImageContainer = styled.div`
  width: 600px;
  height: 600px;
  margin: 0px 10px;
  position: relative;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  @media (max-width: 620px) {
    /* Responsive sizing, without distorting the image */
    width: calc(100% - 20px);
    height: calc(100vw - 20px);
  }
`;

const Background = styled.div`
  width: 100%;
  height: 90%;
  z-index: 1;
  display: flex;
  position: absolute;
  align-items: center;
  flex-flow: column nowrap;
  background-color: #00000087;
`;
