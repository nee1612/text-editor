import React from 'react';
import './App.css';
import EditText from './EditText';
import {BrowserRouter,Route,Routes } from "react-router-dom";

function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<EditText/>}/>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
