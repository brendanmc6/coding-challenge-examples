import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InfoModal = props => {
  if (props.showInfo) {
    return (
      <Background>
        <Popup>
          <Close onClick={() => props.toggleInfo()}>
            <i className="material-icons">close</i>
          </Close>
          <h2>Summary: </h2>
          <p>
            This was built using only React 16.2 and styled-components.
            <br />
            <br />
            For an app of low complexity like this, following react patterns and best-practices is
            enough to avoid the need for third-party state management packages.
            <br />
            <br />
            The Body component stores important state for image loading, sorting, and image modal,
            and the Banner component handles state for the Info modal you are reading right now. The
            rest of the app is broken into pure stateless components and their styled subcomponents.
          </p>
          <h2> Features of this app: </h2>
          <ul>
            <li>
              Pseudo-infinite lazy-loading when user reaches bottom of the page, loading spinner
              during fetch (test it in Dev Tool{`'`}s Slow 3G mode!)
            </li>
            <li>
              Modal view of the full-sized image, with a pre-loaded thumbnail placeholder and a
              loading spinner during image download.
            </li>
            <li>All views are fully responsive, down to iPhone 4 (320px).</li>
          </ul>
          <h2>How could this be improved?</h2>
          <ul>
            <li>
              For truly infinite lazy-loading, we need to avoid performance issues as the number of
              loaded images and DOM nodes increases. We could implement an image limit and a counter
              to track how many images have been loaded, and If count {'>'} limit, images.splice...
              Because each DOM node has a unique key, react should be intelligent enough to smoothly
              unmount the earlier images-- although I have not tested it.
            </li>
            <li>
              Using react-router, you could generate URLs based on the image IDs, which would allow
              you to link someone directly to the image modal (I would also need to re-work the
              placeholder thumbnail system if I did this).
            </li>
            <li>
              Left-Right arrows to navigate from image to image from within the Modal view. This
              could be accomplished by passing the array Index to each Card when mapped (Body.jsx
              line 65), and using this index to find and set the activeImage state to the
              next/previous object in the array.
            </li>
          </ul>
        </Popup>
      </Background>
    );
  }
  return null;
};

InfoModal.propTypes = {
  showInfo: PropTypes.bool.isRequired,
  toggleInfo: PropTypes.func.isRequired,
};

export default InfoModal;

const Close = styled.div`
  top: 15px;
  right: 15px;
  color: black;
  cursor: pointer;
  position: absolute;
  & i {
    font-size: 40px;
  }
  & i:hover {
    color: #64d1b8;
  }
`;

const Popup = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  padding: 10px 30px;
  margin: 10px;
  background: white;
  position: relative;
  border-radius: 4px;
  max-width: 800px;
  max-height: calc(100% - 20px);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const Background = styled.div`
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  bottom: 0;
  align-items: center;
  justify-content: center;
  background-color: #00000087;
`;
