import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import React from 'react';
import Home from "./pages/home";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>    
      </Routes>
    </Router>
  )
}

export default App
