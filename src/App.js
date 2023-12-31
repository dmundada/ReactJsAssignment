import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar/>
            <Routes>
              <Route exact path="/" element={<Home/>} />
            </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
