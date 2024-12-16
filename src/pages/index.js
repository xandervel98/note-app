import NoteForm from '../components/NoteForm/NoteForm';
import NoteList from '../components/NoteList/NoteList'; 
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-family: "Mochiy Pop One", sans-serif;
  font-weight: 600;
`;

export default function Home() {
  return (
    <Container>
      <Title>Notes App</Title>
      <NoteForm />
      <NoteList />
    </Container>
  );
}
