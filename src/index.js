import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';
import Skill from './components/Skils';
import Contact from './components/Contact';
import Services from './components/Services';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
         
          <Route path="about" element={<About/>} />
          <Route path="skill" element={<Skill/>} />
          <Route path="contact" element={<Contact/>}/>
          <Route path="project" element={<Services/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  </>
);

