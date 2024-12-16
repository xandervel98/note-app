import { useNotes } from "../../context/NotesContext";
import Link from "next/link";
import styled from "styled-components";

const List = styled.div`
  margin-top: 20px;
`;

const Note = styled.div`
  border: 1px solid #ccc;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 4px;
  background-color: #ffdbdb;
  border-radius: 10px;
  box-shadow: 11px 6px 5px 0px rgba(0,0,0,0.75);
`;

const Button = styled.button`
  padding: 5px;
  margin-left: 20px;
  background-color: red;
  font-family: "Montserrat", serif;
  font-weight: 400;
  font-size: 18px;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover{
    transform: scale(1.05);
  }
`;

const NoteTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 18px;
`;

const NoteDescription = styled.p`
  margin-bottom: 10px;
  font-size: 18px;
`;

const NoteList = () => {
  const { notes, setNotes } = useNotes();

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <List>
      {notes.map((note) => (
        <Note key={note.id}>
          <NoteTitle>{note.title}</NoteTitle>
          <NoteDescription>{note.description}</NoteDescription>
          <Link href={`/note/${note.id}`}>View Details</Link>
          <Button onClick={() => deleteNote(note.id)}>Delete</Button>
        </Note>
      ))}
    </List>
  );
};

export default NoteList;
