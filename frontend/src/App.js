import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import { useRef } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './pages/home';
import { Login } from './pages/login';
import { SignUp } from './pages/sign-up';
import { Error } from './pages/error';
import { Groups } from './pages/groups';

function App() {

    return (
      <div className='app'>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/groups" element={<Groups/>}/>
            <Route path="/*" element={<Error/>}/>
          </Routes>
        </Router>
      </div>

  );
}

export default App;
