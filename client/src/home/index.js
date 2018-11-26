import React from 'react';
import styled from 'styled-components';
import Header from '../header';
class Home extends React.PureComponent {
  render() {
    return (
      <HomeWrapper>
        <Header />
        <h1>asidhasiudh</h1>
      </HomeWrapper>
    );
  }
}

const HomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

export default Home;
