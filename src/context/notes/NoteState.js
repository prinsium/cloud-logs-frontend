import {useState} from "react";
import NoteContext from "./NoteContext";

const NoteState = (props)=>{
    const b={
        "xx": "cloud",
        "yy": "logs"
    }
    const [state, setState] = useState(b);

    const update = ()=>{
        setTimeout(() => {
            setState({
                "xx": "CLOUD",
                "yy": "LOGS"
            })
        }, 1000);
    }
    return(
        <NoteContext.Provider value={{state:state, update:update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;