import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import { useNavigate } from "react-router-dom";

import { Paper, Box, Typography, IconButton } from "@mui/material";
import { GrView } from "react-icons/gr";
import EditIcon from '@mui/icons-material/Edit';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';


const Noteitem = (props) => {
  const context = useContext(NoteContext);
  const navigate = useNavigate();
  const { notes, editNote } = context;
  const { deleteNote } = context;
  const { note, updateNote, fetchNote } = props;
  return (
    <div className="container justify-content-center">
    <div className='container mx-2 my-2'>
      <Paper elevation={6}>
        <Box p={1}>
          
          <Box sx={{ '& > :not(style)': { m: 1 }, display: 'flex', p: 1 }}>
          <Typography variant="h6" sx={{ flexGrow: 1}}>
            {note.title}</Typography>
            <IconButton size="small" color="default" aria-label="view" onClick={()=>{fetchNote(note)}}>
            <GrView />
          </IconButton>
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
