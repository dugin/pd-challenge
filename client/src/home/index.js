import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import FloatingButton from '../domain/floating-button';
import Record from '../record';
class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <Header />
        <HomeContent>
          <Record />
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
  padding-top: 100px;
  flex: 1;
  margin: auto;
  max-width: 1024px;
`;

export default Home;
