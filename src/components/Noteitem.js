import React, { useContext, useState, useRef } from "react";
import NoteContext from "../context/notes/NoteContext";
import { useNavigate } from "react-router-dom";

import { Paper, Box, Typography, IconButton, TextField, Container, Button, Modal, Fab, Chip, Stack, Divider } from "@mui/material";
import { GrView, GrClose } from "react-icons/gr";
import {CgArrowsExpandRight} from "react-icons/cg"
import EditIcon from '@mui/icons-material/Edit';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

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

const Noteitem = (props) => {

  const ref = useRef(null)
    const refClose = useRef(null)
  const context = useContext(NoteContext);
  const navigate = useNavigate();
  const { notes, editNote } = context;
  const { deleteNote } = context;
  const { note, mynote, updateNote } = props;

  const [modalOpen, setModalOpen] = useState(false);
  const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  const handleModalOpen = (currentNote) => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="container justify-content-center">
    <div className='container mx-2 my-2'>
      <Paper elevation={4}>
        <Box>
          <Box sx={{ '& > :not(style)': { m: 1 }, display: 'flex', p: 1 }}>
          <Typography variant="h6" sx={{flexGrow: 1, whiteSpace: 'nowrap', width: '50px', overflow: 'hidden', textOverflow: 'ellipsis'}}>
            {note.title}</Typography>
            <IconButton size="small" color="default" aria-label="view" title="view note" key={note._id} note={note} onClick={handleOpen}><CgArrowsExpandRight /></IconButton>

        <button ref={ref} type="button" onClick={handleOpen} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
    </button>
            
    <Modal open={open} onClose={handleClose} aria-labelledby="title" aria-describedby="description">
    <Box sx={style}>

        <Container maxWidth="lg">
            <Box sx={{ '& > :not(style)': { m: 1 }, display: 'flex', p: 1 }}>
            <Stack direction="row" spacing={1} sx={{ flexGrow: 1, alignItems: 'center'}}><Chip label={note.tag} /></Stack>
                <Fab size="small" color="default" aria-label="goback" onClick={handleClose}><GrClose /></Fab>
            </Box>
            
        <div className='container mx-3 my-3'>
      <Box component="form" sx={{ p: 1}}>
        <h3 sx={{ my: 3, mx: 2 }}>{note.title}</h3>
        <Divider variant="middle" />
        <p sx={{ my: 3, mx: 2 }}>{note.description}</p>
      </Box>
      </div>
    </Container>
    </Box>
    </Modal>

          <IconButton size="small" color="default" aria-label="edit" title="edit note" onClick={()=>{updateNote(note)}}><EditIcon /></IconButton>
          <IconButton size="small" color="default" aria-label="delete" title="delete note" onClick={()=>{deleteNote(note._id)}}><DeleteTwoToneIcon /></IconButton>
          </Box>
          <Box Box sx={{ '& > :not(style)': { m: 1 }, display: 'flex', p: 1 }} >
          <Typography variant="p" sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
            {note.description}</Typography>
        </Box>
        </Box>
      </Paper>
      </div>
      </div>
  );
};

export default Noteitem;
