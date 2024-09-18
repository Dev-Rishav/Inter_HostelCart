import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import React from 'react';
import Home from "./pages/Home";
import Mens from "./pages/Mens";
import MyShop from "./pages/MyShop";
import Womens from "./pages/Womens";
import Contact from "./pages/Contact";


function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/myShop" element={<MyShop />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
