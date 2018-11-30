import React from 'react';
import { FaPlus } from 'react-icons/fa';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ROUTES from '../helpers/routes';

const FloatingButton = () => {
  return (
    <Button to={ROUTES.NEW_RECORD}>
      <PlusIcon />
    </Button>
  );
};

const Button = styled(Link)`
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

  &:hover {
    box-shadow: 2px 4px 8px 0 rgba(46, 61, 73, 0.2);
  }
`;

const PlusIcon = styled(FaPlus)`
  color: ${props => props.theme.colors.primary};
`;

export default FloatingButton;
