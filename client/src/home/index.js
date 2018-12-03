import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import styled from 'styled-components';
import Header from '../components/header';
import FloatingButton from '../components/floating-button';
import { fetchRecords } from '../domain/domain.requests';
import Record from '../record';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import queryString from 'query-string';

class Home extends Component {
  constructor(props) {
    super(props);

    this.searchAPIDebounced = AwesomeDebouncePromise(this.props.getRecords, 500);
  }
  componentDidMount() {
    const { record } = queryString.parse(this.props.location.search);

    this.props.getRecords(record);
  }

  onSearch = async event => {
    const searchText = event.target.value;

    if (searchText) {
      this.props.history.push(`?record=${searchText}`);
    } else {
      this.props.history.push(``);
    }

    this.searchAPIDebounced(searchText);
  };

  render() {
    const { records } = this.props;
    return (
      <HomeWrapper>
        <Header onSearch={this.onSearch} />
        <HomeContent>
          {records.map(record => <Record key={record.id} record={record} />)}

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
  margin: 0 auto;
  max-width: 1024px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

function mapStateToProps({ domain }) {
  return { records: domain.records };
}

function mapDispatchToProps(dispatch) {
  return {
    getRecords: record => dispatch(fetchRecords(record))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
