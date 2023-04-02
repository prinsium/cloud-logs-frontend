import React, { useContext, useState, useRef } from "react";
import NoteContext from "../context/notes/NoteContext";
import { useNavigate } from "react-router-dom";

import { Paper, Box, Typography, IconButton } from "@mui/material";
import { GrView } from "react-icons/gr";
import EditIcon from '@mui/icons-material/Edit';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { TextField, Container, Button, Modal, Fab, Stack } from '@mui/material';

import { GrClose } from "react-icons/gr";

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
      <Paper elevation={6}>
        <Box p={1}>
          
          <Box sx={{ '& > :not(style)': { m: 1 }, display: 'flex', p: 1 }}>
          <Typography variant="h6" sx={{ flexGrow: 1}}>
            {note.title}</Typography>
            <IconButton size="small" color="default" aria-label="view" key={note._id} note={note} onClick={handleOpen}>
            <GrView />
          </IconButton>

        
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
                <Typography variant="h3" sx={{ flexGrow: 1, alignItems: 'center'}}>{note.title}</Typography>
                <Fab size="small" color="default" aria-label="goback" onClick={handleClose}><GrClose /></Fab>
            </Box>
            
        <div className='container mx-3 my-3'>
      <Box component="form" sx={{ p: 1}}>
        <TextField
          fullWidth
          id="title"
          name="title"
          label="Title"
          variant="standard"
          size='normal'
          value={note.title}
        />
        <TextField
          fullWidth
          id="description"
          name="description"
          label="Description"
          variant="standard"
          size='small'
          value={note.description}
        />
        <TextField
          fullWidth
          id="tag"
          name="tag"
          label="Tags"
          variant="standard"
          size='small'
          value={note.tag}
        />
      </Box>
      </div>
    </Container>
    </Box>
    </Modal>

          {/* {modalOpen && (
        <>
        <button ref={ref} onClick={handleModalOpen} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <IconButton size="small" color="default" aria-label="view" key={note._id} onClick={handleModalOpen}>
            <GrView />
          </IconButton>
        </button>
        
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">{note.title}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              {note.description}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        </>
        )} */}
          <IconButton size="small" color="default" aria-label="edit" onClick={()=>{updateNote(note)}}>
            <EditIcon />
          </IconButton>
          <IconButton size="small" color="default" aria-label="delete" onClick={()=>{deleteNote(note._id)}}>
            <DeleteTwoToneIcon />
          </IconButton>
          </Box>
          <Box m={1} >
          <Typography variant="p">
            {note.description}</Typography>
        </Box>
        </Box>
      </Paper>
      </div>
      </div>
  );
};

export default Noteitem;
