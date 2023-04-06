import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../context/notes/NoteContext";
import Noteitem from "./Noteitem";
import AddAnote from "./AddAnote";
import { useNavigate } from "react-router";
import { TextField, Container, Typography, Button, Box, Modal, Fab, Stack } from '@mui/material';

import { GrClose } from "react-icons/gr";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { CiFaceFrown } from 'react-icons/ci';
import { green } from '@mui/material/colors';

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
  overflow: 'scroll'
};


const Notes = () => {
    const context = useContext(NoteContext);
    let navigate = useNavigate;
    const { notes, getNotes, editNote } = context;
    useEffect(() => {
        if(localStorage.getItem('token')){
        getNotes()
    } else {
        navigate('/login')
    }   // eslint-disable-next-line
    }, [])


    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setNote] = useState({id: "", etitle: "", edescription: "", etag: ""})
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [selectedNoteId, setSelectedNoteId] = useState(null);

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag:currentNote.tag})
    }

    const handleClick = (e)=>{
      editNote(note.id, note.etitle, note.edescription, note.etag)
      setOpen(false);
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }

  return (
    <>
    <AddAnote/>

    {/* Below code id for update note modal    */}
    <button ref={ref} type="button" onClick={handleOpen} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
    </button>
            
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="title"
    aria-describedby="description"
>
    <Box sx={style}>
        <Container maxWidth="lg">
            <Box sx={{ '& > :not(style)': { m: 1 }, display: 'flex', p: 1 }}>
                <Typography variant="h5" sx={{ flexGrow: 1, alignItems: 'center'}}>Edit Note</Typography>
                <Fab size="small" color="default" aria-label="goback" onClick={handleClose}><GrClose /></Fab>
            </Box>
            
        <div className='container mx-3 my-3'>
      <Box component="form" sx={{ p: 1}} onSubmit={handleClick}>
        <TextField
          fullWidth
          id="etitle"
          name="etitle"
          label="Title"
          variant="standard"
          size='normal'
          value={note.etitle}
          onChange={onChange}
          multiline
          rows={2}
        />
        <TextField
          fullWidth
          id="edescription"
          name="edescription"
          label="Description"
          variant="standard"
          size='small'
          value={note.edescription}
          onChange={onChange}
          multiline
          rows={10}
        />
        <TextField
          fullWidth
          id="etag"
          name="etag"
          label="Tags"
          variant="standard"
          size='small'
          value={note.etag}
          onChange={onChange}
          multiline
          rows={1}
        />
      </Box>
       </div>

       <div className='d-flex justify-content-center mt-3 mb-3'>
        <div className="modal-footer">
        <Fab disabled={note.etitle.length<5 || note.edescription.length<5} sx={{color: green[500] }} 
        size="medium" type="submit" variant="contained" onClick={handleClick}>
              <NoteAddIcon /></Fab>
        </div>
        </div>
    </Container>
    </Box>
    </Modal>

            {notes.length===0 ? (
            <Stack
            sx={{ height: "100%" }}
            justifyContent="center"
            alignItems="center"
            spacing={2}
            >
            <CiFaceFrown size={200} />
            <Typography variant="h3">No Notes to display</Typography>
            </Stack>
            ) : (
                notes.map((note) => {
                    return <Noteitem key={note._id} updateNote={updateNote} note={note} />
                })
            )}
        </>
    )
}

export default Notes;