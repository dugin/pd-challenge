import React from 'react';
import { FaPlus } from 'react-icons/fa';
import styled from 'styled-components';

const FloatingButton = () => {
  return (
    <Button>
      <FaPlus />
    </Button>
  );
};

const Button = styled.a`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 20px;
  right: 20px;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.2);
  background-color: ${props => props.theme.colors.accent};
`;

export default FloatingButton;
