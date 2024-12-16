import { useState } from 'react';
import { useNotes } from '../../context/NotesContext'; 
import styled from 'styled-components';

const Form = styled.form`
  margin: 20px 0px;
`;

const Input = styled.input`
  margin-right: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 18px;
  font-family: "Montserrat", serif;
  font-weight: 400;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #0070f3;
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

const NoteForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { notes, setNotes } = useNotes();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = { id: Date.now(), title, description };
    setNotes([...notes, newNote]);
    setTitle('');
    setDescription('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button type="submit">Add Note</Button>
    </Form>
  );
};

export default NoteForm;
