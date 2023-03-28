
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
import Login from './components/Login';
import Signup from './components/Signup'
import CreateNote from './components/CreateNote';
import MyNote from './components/MyNote';
import EditNote from './components/EditNote';

function App() {
  return (
<div>
    <NoteState>
        <Router>
          <Navbar/>
        <Routes>
        <Route exact path='/Home' element={<Home/>}/>
        <Route exact path='/About' element={<About/>}/>
        <Route exact path='/CreateNote' element={<CreateNote/>}/>
        <Route exact path='/MyNote' element={<MyNote/>}/>
        <Route exact path='/EditNote' element={<EditNote/>}/>
        <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='/Signup' element={<Signup/>}/>
        </Routes>
        </Router>
    </NoteState>
</div>
  )
}

export default App;
