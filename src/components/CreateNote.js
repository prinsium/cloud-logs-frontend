import React, {useContext, useState} from 'react'
import NoteContext from '../context/notes/NoteContext';
import { useNavigate} from 'react-router-dom';

import { Typography, TextField, Button, Box, Fab, Container, IconButton } from '@mui/material';
import { BiArrowBack } from "react-icons/bi";

const CreateNote = () => {
  const context = useContext(NoteContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {addNote} = context;
  const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}

  const [note, setNote] = useState({title: "", description: "", tag: ""})

  const handleClick = (e)=>{
      e.preventDefault();
      addNote(note.title, note.description, note.tag);
      setOpen(false);
  }

  const onChange = (e)=>{
      setNote({...note, [e.target.name]: e.target.value})
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ '& > :not(style)': { m: 1 }, display: 'flex', p: 1 }}>
      <Fab size="small" color="default" aria-label="goback" onClick={goBack}>
            <BiArrowBack />
          </Fab>
          <Typography variant="h3" sx={{ flexGrow: 1, alignItems: 'center'}}>Add A Note</Typography>
    </Box>
    <div className='container mx-3 my-3'>
      <Box component="form" sx={{ p: 1}} onSubmit={handleClick}>
        <TextField
          fullWidth
          id="title"
          name="title"
          label="Title"
          variant="standard"
          size='normal'
          value={note.title}
          onChange={onChange}
          rows={10}
        />
        <TextField
          fullWidth
          id="description"
          name="description"
          label="Description"
          variant="standard"
          size='small'
          value={note.description}
          onChange={onChange}
          multiline
          rows={10}
        />
        <TextField
          fullWidth
          id="tag"
          name="tag"
          label="Tags"
          variant="standard"
          size='small'
          value={note.tag}
          onChange={onChange}
          multiline
          rows={1}
        />
        <Button sx={{ mt: 3, mb: 2, alignItems: 'center' }} type="submit" variant="contained" color="primary" onClick={handleClick}>
          ADD
        </Button>
      </Box>
      </div>
      </Container>
  );
}

export default CreateNote;
