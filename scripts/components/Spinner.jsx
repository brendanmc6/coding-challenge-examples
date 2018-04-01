import React from 'react';
import styled, { keyframes } from 'styled-components';

const Spinner = () => <SpinnerContainer />;

export default Spinner;

const dualRing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  width: 46px;
  margin: 1px;
  content: ' ';
  height: 46px;
  display: block;
  border-radius: 50%;
  border: 5px solid #64d1b8;
  animation: ${dualRing} 1.2s linear infinite;
  border-color: #64d1b8 transparent #64d1b8 transparent;
`;
