import React from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import FloatingButton from '../domain/floating-button';
class Home extends React.PureComponent {
  render() {
    return (
      <HomeWrapper>
        <Header />
        <HomeContent>
          <FloatingButton />
        </HomeContent>
      </HomeWrapper>
    );
  }
}

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

const HomeContent = styled.section`
  padding-top: 80px;
  flex: 1;
`;

export default Home;
