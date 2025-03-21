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
  const [loggedIn, setLoggedIn] = useState(false);
  console.log(token)
  console.log(loggedIn)
  
  if(!loggedIn) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Login setToken={setToken} setLoggedIn={setLoggedIn}/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/*" element={<Home/>}/>
        </Routes>
      </Router>
    )
  } else {
    return (
      <div className='app'>
        <Router>
          <Routes>
          <Route path="/" element={<GroupsDashboard setLoggedIn={setLoggedIn}/>}/>
          <Route path="/login" element={token.success ? <Navigate to="/" replace /> : <Login/>} />
          <Route path="/groups" element={<Groups/>}/>
          <Route path="/groups-dashboard" element={<GroupsDashboard setLoggedIn={setLoggedIn}/>}/>
          <Route path="/expenses" element={<Expenses/>}/>
          <Route path="/friends" element={<Friends/>}/>
          <Route path="/transactions" element={<Transactions/>}/>
          <Route path="/*" element={<Error/>}/>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
