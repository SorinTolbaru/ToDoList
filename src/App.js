import "./index.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ToDoList from "./Home";
import Notes from "./Notes";
import GetandPost from "./GetandPost";
import Newnote from "./Newnote";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
    <Routes>
    <Route path="/ToDoList" element={<ToDoList/>}/>
    <Route path="NotesList" element={<GetandPost/>}/>1
    <Route path="NewNote" element={<Newnote/>}/>
    <Route path="Notes/:id" element={<Notes/>}/>
    </Routes>
  </div>
    </Router>

  );
}

export default App;
