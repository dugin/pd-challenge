import React from 'react';
import lpRecord from '../assets/img/lp-record.png';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const Header = props => {
  return (
    <HeaderWrapper>
      <LogoImg src={lpRecord} alt="" width={50} height={50} />
      <SearchWrapper>
        <SearchIcon />
        <SearchInput type="text" placeholder="Buscar disco" />
      </SearchWrapper>
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
`;

const LogoImg = styled.img`
  position: absolute;
  left: 15px;
`;

const SearchWrapper = styled.form`
  border-radius: 4px;
  padding: 0.5rem 1rem;
  border: 1px solid #d1d1d1;
  display: flex;
  align-items: center;
  position: relative;
  height: 50px;
  width: 70%;
`;

const SearchIcon = styled(FaSearch)`
  color: gray;
`;
const SearchInput = styled.input`
  border: none;
  outline: none;
  color: #000;
  font-size: 0.75rem;
  z-index: 1;
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
`;

export default Header;
