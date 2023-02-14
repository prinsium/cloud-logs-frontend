
import './App.css';
import { Navbar } from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';

function App() {
  return (
<div>
    <NoteState>
        <Router>
          <Navbar/>
        <Routes>
        <Route exact path='/Home' element={<Home/>}/>
        <Route exact path='/About' element={<About/>}/>
        </Routes>
        </Router>
    </NoteState>
</div>
  )
}

export default App;
