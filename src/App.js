import React from 'react';
import './App.css';
import TextEditor from './TextEditor';
import EditText from './EditText';
import {BrowserRouter,Route,Routes } from "react-router-dom";

function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<TextEditor/>}/>
      <Route path="/edit" element={<EditText/>}/>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
