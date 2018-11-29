import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import InputWrapper from '../components/input-wrapper';

class CreateRecord extends React.Component {
  render() {
    return (
      <CreateRecordWrapper>
        <CreateRecordBox>
          <h1>Novo Disco</h1>

          <CreateRecordForm>
            <InputWrapper style={{ backgroundColor: 'white' }}>
              <input type="text" placeholder="Nome do Disco" />
            </InputWrapper>

            <CreateRecordButtonWrapper>
              <CreateRecordButton to="/">cadastrar</CreateRecordButton>
            </CreateRecordButtonWrapper>
          </CreateRecordForm>
        </CreateRecordBox>
      </CreateRecordWrapper>
    );
  }
}

const CreateRecordWrapper = styled.section`
  max-width: 600px;
  padding: 20px;
  margin: auto;
  min-height: 100vh;
`;

const CreateRecordForm = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const CreateRecordBox = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 15px;
  background-color: #fff0d4;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.07);
  border-radius: 5px;
`;

const CreateRecordButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;
const CreateRecordButton = styled(Link)`
  background-color: black;
  color: white;
  border: 1px solid black;
  border-radius: 5px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: 10px;
`;

export default CreateRecord;
