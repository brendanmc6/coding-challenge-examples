import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';

const SortButton = props => (
  <SortContainer>
    <Button onClick={props.handleSort} asc={props.sort === 'asc'}>
      <span>sorted by title, {props.sort}ending order</span>
      <i className="material-icons">{props.sort === 'asc' ? 'arrow_downward' : 'arrow_upward'}</i>
    </Button>
  </SortContainer>
);
SortButton.propTypes = {
  sort: PropTypes.string.isRequired,
  handleSort: PropTypes.func.isRequired,
};

export default SortButton;

const Button = styled.div`
  width: 60vw;
  height: 100%;
  display: flex;
  cursor: pointer;
  padding: 0px 10px;
  background: white;
  position: relative;
  align-items: center;
  justify-content: center;
  border-radius: 0px 0px 4px 4px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  & i {
    right: -5px;
    font-size: 30px;
    padding: 0px 5px;
    user-select: none;
    margin-left: auto;
    position: relative;
  }
  & span {
    position: absolute;
  }
  &:hover {
    background: linear-gradient(${props => (props.asc ? 'to bottom' : 'to top')}, #96e0cf, white);
  }
  @media (max-width: 520px) {
    & span {
      font-size: 14px;
    }
  }
  @media (max-width: 450px) {
    & span {
      position: relative;
    }
  }
`;

const SortContainer = styled.div`
  width: 100vw;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
