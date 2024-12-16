import { useRouter } from 'next/router';
import { useNotes } from '../../context/NotesContext';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(--background-color);
  padding: 20px;
`;

const NoteCard = styled.div`
  background-color: #ffdbdb;
  padding: 20px;
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 0 4px 12px var(--shadow-light);
  text-align: center;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  box-shadow: 11px 6px 5px 0px rgba(0,0,0,0.75);
`;

const Title = styled.h1`
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: var(--button-primary);
  font-family: "Montserrat", serif;
  font-weight: 400;
  font-size: 18px;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  transition: transform 0.3s ease;

  &:hover{
    transform: scale(1.05);
  }
`;

export default function NoteDetails() {
  const router = useRouter();
  const { id } = router.query;
  const { notes } = useNotes();

  const note = notes.find((note) => note.id === parseInt(id));

  if (!note) {
    return <p>Note not found</p>;
  }

  const handleBackToHome = () => {
    router.push('/');
  };

  return (
    <Container>
      <NoteCard>
        <Title>{note.title}</Title>
        <Description>{note.description}</Description>
        <Button onClick={handleBackToHome}>Back to Notes</Button>
      </NoteCard>
    </Container>
  );
}
