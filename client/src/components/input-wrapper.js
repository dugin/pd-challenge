import React from 'react';
import styled from 'styled-components';

const InputWrapper = ({ children, style = {} }) => {
  return <SearchWrapper style={style}>{children}</SearchWrapper>;
};

const SearchWrapper = styled.div`
  border-radius: 4px;
  padding: 0.5rem 1rem;
  border: 1px solid #d1d1d1;
  display: flex;
  align-items: center;
  height: 50px;

  &:hover {
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.07);
  }
`;

export default InputWrapper;
