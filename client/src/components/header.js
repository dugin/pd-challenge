import React from 'react';
import lpRecord from '../assets/img/lp-record.png';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import InputWrapper from './input-wrapper';
import media from '../theme/media-query';

const Header = props => {
  return (
    <HeaderWrapper>
      <LogoImg src={lpRecord} alt="" />

      <FormWrapper>
        <InputWrapper>
          <SearchIcon />
          <input type="text" placeholder="Buscar disco" />
        </InputWrapper>
      </FormWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  height: 80px;
  width: 100%;
  position: fixed;
  background-color: #fff;
  z-index: 2;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.07);

  ${media.phone`
  justify-content: space-between;
`};
`;

const FormWrapper = styled.form`
  width: 70%;

  ${media.phone`
      width: 100%;
      margin-left: 15px
  `};
`;

const LogoImg = styled.img`
  position: absolute;
  left: 15px;

  width: 50px;
  height: 50px;

  ${media.phone`
  position: relative;
   left: 0 ;
   width: 40px;
   height: 40px;
`};
`;

const SearchIcon = styled(FaSearch)`
  color: gray;
`;

export default Header;
