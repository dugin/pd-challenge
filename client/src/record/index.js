import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Record = ({ record }) => {
  return (
    <RecordWrapper to={'record/' + record.id}>
      <RecordImage src={record.imageUrl} />
      <RecordName>{record.name}</RecordName>

      <ArtistName>{record.artist}</ArtistName>
    </RecordWrapper>
  );
};

const RecordWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.07);
  width: 150px;
  height: 250px;
  margin: 10px;
  text-decoration: none;
`;

const RecordImage = styled.img`
  width: 150px;
  height: 150px;
  margin: 0;
`;
const RecordName = styled.p`
  margin: 5px 0 10px 0;
  padding-left: 10px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-height: 20px;
  max-height: 40px;
`;
const ArtistName = styled.p`
  font-size: 12px;
  padding-left: 10px;
  color: rgba(0, 0, 0, 0.4);
`;

export default Record;
