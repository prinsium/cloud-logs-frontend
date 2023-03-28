import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../context/notes/NoteContext";
import ViewNote from "./ViewNote";
import AddAnote from "./AddAnote";
import Navbar from "./Navbar";
import { Container } from "@mui/system";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

const MyNote = (props) => {
  const params = useParams();
  const [note, setNote] = useState(null);

  const fetchNote = async () => {
    const data = await getNotes(params.id);}
    const context = useContext(NoteContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchNote();
  }, [params.id]);

  const { notes, getNotes, editNote } = context;
  // const { deleteNote } = context;
  // const { note, updateNote } = props;

  return (
    <div className="container d-flex justify-content-center mt-3">
      <Container>
      <Navbar />
              <ViewNote note={note} key={note._id} />
    </Container>
    </div>
  )
}

export default MyNote