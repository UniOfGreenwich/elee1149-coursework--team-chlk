import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import { useRef } from 'react';

import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './pages/home';
import { Login } from './pages/login';
import { SignUp } from './pages/sign-up';
import { Error } from './pages/error';
import { Groups } from './pages/groups';
import { GroupsDashboard } from './pages/groups-dashboard';
import { Expenses } from './pages/expenses';
import { Friends } from './pages/friends';
import { Transactions } from './pages/transactions';
import useToken from './components/use-token';

function App() {
  const { token, setToken } = useToken();

  
  if(!token) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Login setToken={setToken}/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/*" element={<Home/>}/>
        </Routes>
      </Router>
    )
  }

    return (
      <div className='app'>
        <Router>
          <Routes>
          <Route path="/" element={<GroupsDashboard token={token}/>}/>
          <Route path="/login" element={token ? <Navigate to="/" replace /> : <Login/>} />
          <Route path="/groups" element={<Groups token={token}/>}/>
          <Route path="/groups-dashboard" element={<GroupsDashboard token={token}/>}/>
          <Route path="/expenses" element={<Expenses token={token}/>}/>
          <Route path="/friends" element={<Friends token={token}/>}/>
          <Route path="/transactions" element={<Transactions token={token}/>}/>
          <Route path="/*" element={<Error/>}/>
          </Routes>
        </Router>
      </div>

  );
}

export default App;
