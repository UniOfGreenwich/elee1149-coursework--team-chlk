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
import { GroupsDashboard } from './pages/groups-dashboard';
import { Expenses } from './pages/expenses';
import { Friends } from './pages/friends';
import { Transactions } from './pages/transactions';

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
            <Route path="/groups-dashboard" element={<GroupsDashboard/>}/>
            <Route path="/expenses" element={<Expenses/>}/>
            <Route path="/friends" element={<Friends/>}/>
            <Route path="/transactions" element={<Transactions/>}/>
            <Route path="/*" element={<Error/>}/>
          </Routes>
        </Router>
      </div>

  );
}

export default App;
