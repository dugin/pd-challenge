import React from 'react';
import lpRecord from './assets/img/lp-record.png';
import styled from 'styled-components';
const Header = props => {
  return (
    <HeaderWrapper>
      <img src={lpRecord} alt="" width={50} height={50} />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  padding: 10px;
  height: 80px;
`;

export default Header;
