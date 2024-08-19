import React from "react";
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from "./components/Home.jsx";
import Menu from "./components/Menu.jsx";
import Skills from "./components/Skills.jsx";
import ContactMe from "./components/ContactMe.jsx";
import MyProjects from "./components/MyProjects.jsx";
import './index.css';

function App() {
  return ( 

    <>
    <Router>
    <Menu/>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/Skills" exact element={<Skills/>}/>
      <Route path="/ContactMe" exact element={<ContactMe/>}/>
      <Route path="/MyProjects" exact element={<MyProjects/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App;

