import React, {useContext, useState} from 'react'
import NoteContext from '../context/notes/NoteContext';
import { TextField, Container, Typography, Button, Box, Modal, Fab } from '@mui/material';

import { GrClose } from "react-icons/gr";
import AddIcon from '@mui/icons-material/Add';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1,
  height: 1,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const AddAnote = () => {
    const context = useContext(NoteContext);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {addNote} = context;
    
    const closeNow = () => {
      setOpen(false);
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
        <div>
            <div className='d-flex justify-content-center mt-2'>
            <Fab color="primary" aria-label="add" onClick={handleOpen}>
        <AddIcon />
      </Fab></div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="title"
          aria-describedby="description"
        >
          <Box sx={style}>
        <Container maxWidth="lg">
      <Box sx={{ '& > :not(style)': { m: 1 }, display: 'flex', p: 1 }}>
         <Typography variant="h3" sx={{ flexGrow: 1, alignItems: 'center'}}>Add A Note</Typography>
         <Fab size="small" color="default" aria-label="goback" onClick={closeNow}><GrClose /></Fab>
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
          </Box>
        </Modal>
      </div>

    )
}

export default AddAnote