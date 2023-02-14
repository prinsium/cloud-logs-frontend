import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/notes/NoteContext'

const About = () => {
    const a = useContext(NoteContext);
    useEffect(() => {
        a.update();
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            <center>
            <h3>welcome to {a.state.xx} - {a.state.yy}</h3>
            </center>
        </div>
    )
}

export default About