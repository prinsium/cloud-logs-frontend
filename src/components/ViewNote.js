import React, {useContext, useState} from 'react'
import NoteContext from '../context/notes/NoteContext';
import { useNavigate} from 'react-router-dom';

import { Fab, Box, Typography, Container, TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { BiArrowBack } from "react-icons/bi";
import DeleteTwoTone from '@mui/icons-material/DeleteTwoTone';

const ViewNote = (props) => {
    const context = useContext(NoteContext);
    let noteData = props.note;
    const [note, setNote] = useState(noteData);
    const { notes, getNotes, editNote, deleteNote } = context;
    const { updateNote } = props;
  // const navigate = useNavigate();
	// const goBack = () => {
	// 	navigate(-1);
	// }

  return (
    <Container maxWidth="lg">
      {/* <Box sx={{ '& > :not(style)': { m: 1 }, display: 'flex', p: 1 }}>
      <Fab size="small" color="default" aria-label="goback" onClick={goBack}><BiArrowBack /></Fab>
          <Typography variant="h3" sx={{ flexGrow: 1, alignItems: 'center'}}></Typography>
          <Fab size="small" color="default" aria-label="edit" onClick={()=>{updateNote(note)}}><EditIcon /></Fab>
          <Fab size="small" color="default" aria-label="delete" onClick={()=>{deleteNote(note._id)}}><DeleteTwoToneIcon /></Fab>
    </Box> */}
    <div className='container mx-3 my-3'>
      <Box component="form" sx={{ p: 1}}>
      <Typography variant="h6">{note.title}</Typography>
      <Typography variant="p">{note.description}</Typography>
        {/* <TextField
          fullWidth
          variant="standard"
          size='small'
          value={note.tag}
          multiline
          rows={1}
        /> */}
      </Box>
      </div>
      </Container>
  );
}

export default ViewNote;