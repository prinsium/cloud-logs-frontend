import React, {useContext, useState} from 'react'
import NoteContext from '../context/notes/NoteContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1/2,
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
          <div className="container my-3">
            <h2>Add a Note</h2>
            <form className="my-3">
                <div className="mb-3">
                    <input type="text" className="form-control form-control-lg" placeholder='Title' id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required /> 
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder='Description' rows="4" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control form-control-sm" placeholder='Tags' id="tag" name="tag" value={note.tag} onChange={onChange} minLength={5} required />
                </div>
               
                <button className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
          </Box>
        </Modal>
      </div>

    )
}

export default AddAnote