import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import InputWrapper from '../components/input-wrapper';
import { FaPlus, FaTimes } from 'react-icons/fa';
import guid from '../helpers/uid-generator';

const whiteBackground = { backgroundColor: 'white' };
class CreateRecord extends React.Component {
  state = { musics: [{ id: guid(), name: '' }], name: '', artist: '', navigateBack: false };

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

  onSubmit = () => {
    console.log('state ', this.state);
  };

  render() {
    const { musics, name, artist, navigateBack } = this.state;

    if (navigateBack) {
      return <Redirect to="/" />;
    }

    return (
      <CreateRecordWrapper>
        <CreateRecordBox>
          <h1>Novo Disco</h1>

          <CreateRecordForm>
            <InputWrapper style={{ ...whiteBackground, marginBottom: 10 }}>
              <input
                type="text"
                placeholder="Nome do Disco"
                value={name}
                onChange={this.handleChange('name')}
              />
            </InputWrapper>

            <InputWrapper style={whiteBackground}>
              <input
                type="text"
                placeholder="Artista"
                value={artist}
                onChange={this.handleChange('artist')}
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

            <CreateRecordButtonWrapper>
              <CreateRecordButton onClick={this.onSubmit}>cadastrar</CreateRecordButton>
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
`;

const RemoveIcon = styled(FaTimes)`
  color: white;
`;

export default CreateRecord;
