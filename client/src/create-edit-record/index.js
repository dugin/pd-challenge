import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import InputWrapper from '../components/input-wrapper';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { deleteRecord, fetchRecord, putRecord, postRecord } from '../domain/domain.requests';
import guid from '../helpers/uid-generator';
import * as R from 'ramda';
const whiteBackground = { backgroundColor: 'white' };

const RECORD_MODE = { EDIT: 'edit', CREATE: 'create' };

class CreateEditRecord extends Component {
  state = {
    musics: [{ id: guid(), name: '' }],
    name: '',
    artist: '',
    imageUrl: '',
    navigateBack: false,
    recordMode: RECORD_MODE.CREATE
  };

  componentWillReceiveProps(nextProps, nextContext) {
    const errorType = R.path(['error', 'type'], nextProps);
    if (errorType === 'RECORD_NOT_FOUND') {
      this.setState({ navigateBack: true });
    }
  }

  async componentDidMount() {
    const recordId = R.path(['match', 'params', 'recordId'], this.props);

    if (recordId) {
      await this.props.getRecord(recordId);

      this.setState(state => ({ ...state, ...this.props.record, recordMode: RECORD_MODE.EDIT }));
    }
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  removeMusic = musicToBeRemoved => event => {
    this.setState(({ musics }) => ({
      musics: musics.filter(music => music.id !== musicToBeRemoved.id)
    }));
  };

  handleChangeMusic = musicToBeChanged => event => {
    event.persist();

    this.setState(({ musics }) => ({
      musics: musics.map(
        music =>
          music.id === musicToBeChanged.id
            ? { ...musicToBeChanged, name: event.target.value }
            : music
      )
    }));
  };

  addMusic = () => {
    this.setState(({ musics }) => ({
      musics: [...musics, { id: guid(), name: '' }]
    }));
  };

  removeRecord = async () => {
    await this.props.removeRecord(this.state.id);
    if (!this.props.error) {
      this.setState({ navigateBack: true });
    }
  };

  onSubmit = async () => {
    const { navigateBack, recordMode, ...record } = this.state;

    if (recordMode === RECORD_MODE.CREATE) {
      await this.props.addRecord(record);
    } else {
      await this.props.updateRecord(record);
    }

    if (!this.props.error) {
      this.setState({ navigateBack: true });
    }
  };

  renderErrorMessage() {
    const errorMsg = R.path(['error', '0', 'msg'], this.props);

    if (errorMsg) {
      return <ErrorMessage>*{errorMsg}</ErrorMessage>;
    }
  }

  render() {
    const { musics, name, artist, navigateBack, imageUrl, recordMode } = this.state;

    if (navigateBack) {
      return <Redirect to="/" />;
    }

    return (
      <CreateRecordWrapper>
        <CreateRecordBox>
          <h1> {recordMode === RECORD_MODE.CREATE ? 'Novo Disco' : 'Editar Disco'}</h1>

          <CreateRecordForm>
            <InputWrapper style={{ ...whiteBackground, marginBottom: 10 }}>
              <input
                type="text"
                placeholder="Nome do Disco"
                value={name}
                onChange={this.handleChange('name')}
              />
            </InputWrapper>
            <InputWrapper style={{ ...whiteBackground, marginBottom: 10 }}>
              <input
                type="text"
                placeholder="Artista"
                value={artist}
                onChange={this.handleChange('artist')}
              />
            </InputWrapper>
            <InputWrapper style={whiteBackground}>
              <input
                type="text"
                placeholder="URL da imagem"
                value={imageUrl}
                onChange={this.handleChange('imageUrl')}
              />
            </InputWrapper>
            <MusicTitleWrapper>
              <MusicTitle>Músicas</MusicTitle>
              <AddButton onClick={this.addMusic}>
                <PlusIcon />
              </AddButton>
            </MusicTitleWrapper>
            <MusicList>
              {musics.map((music, i) => (
                <MusicListItem key={music.id}>
                  <InputWrapper style={{ ...whiteBackground, flex: 1 }}>
                    <input
                      value={music.name}
                      onChange={this.handleChangeMusic(music)}
                      type="text"
                      placeholder="Música"
                    />
                  </InputWrapper>
                  {i !== 0 && (
                    <RemoveButton onClick={this.removeMusic(music)}>
                      <RemoveIcon />
                    </RemoveButton>
                  )}
                </MusicListItem>
              ))}
            </MusicList>
            {this.renderErrorMessage()}
            <CreateRecordButtonWrapper>
              {recordMode === RECORD_MODE.EDIT && (
                <EraseRecordButton onClick={this.removeRecord}>apagar</EraseRecordButton>
              )}
              <CreateRecordButton onClick={this.onSubmit}>
                {recordMode === RECORD_MODE.CREATE ? 'cadastrar' : 'salvar'}
              </CreateRecordButton>
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
const CreateRecordButton = styled.a`
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

const EraseRecordButton = styled(CreateRecordButton)`
  background-color: transparent;
  margin-right: 30px;
  color: red;
  border-color: red;
`;

const MusicTitleWrapper = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
`;
const MusicTitle = styled.h4`
  margin: 20px 0;
`;
const MusicList = styled.ul``;

const MusicListItem = styled.li`
  flex-direction: row;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const AddButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 35px;
  width: 35px;
  margin-left: 15px;
  background-color: ${props => props.theme.colors.accent};
`;

const PlusIcon = styled(FaPlus)`
  color: ${props => props.theme.colors.primary};
`;

const RemoveButton = styled(AddButton)`
  height: 30px;
  width: 30px;
  background-color: red;
  font-size: 12px;
`;

const RemoveIcon = styled(FaTimes)`
  color: white;
`;

const ErrorMessage = styled.p`
  color: red;
`;

function mapStateToProps({ domain }) {
  return {
    record: domain.selectedRecord,
    error: domain.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addRecord: record => dispatch(postRecord(record)),
    getRecord: recordId => dispatch(fetchRecord(recordId)),
    removeRecord: recordId => dispatch(deleteRecord(recordId)),
    updateRecord: record => dispatch(putRecord(record))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEditRecord);
