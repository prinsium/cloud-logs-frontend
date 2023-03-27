import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

const Noteitem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
          <div className="card">
            <div className="card-body d-flex align-items-center">
                <h5 className="card-title">{note.title}</h5>
                <i className="fa-solid fa-trash bg-body-tertiary" onClick={()=>{deleteNote(note._id)}}></i>
                <i className="fa-solid fa-pen-to-square" onClick={()=>{updateNote(note)}}></i>
              </div>
              <p className="card-text">{note.description}</p>
          </div>
  );
};

export default Noteitem;
