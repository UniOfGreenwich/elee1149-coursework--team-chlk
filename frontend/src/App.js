import logo from './logo.svg';
import './App.css';
import "./styles/dashboard.css";
import {useState} from "react";
import { useRef } from 'react';

import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './pages/home';
import { Login } from './pages/login';
import { SignUp } from './pages/sign-up';
import { Error } from './pages/error';
import { Dashboard } from './pages/dashboard';
import { Groups } from './pages/groups';
import { GroupsDashboard } from './pages/groups-dashboard';
import { Expenses } from './pages/expenses';
import { Friends } from './pages/friends';

import useToken from './methods/use-token';

import { SideBar } from "./components/dashboard-sidebar";
import { TopBar } from "./components/dashboard-topbar";


function App() {
  const { token, setToken } = useToken();
  const [signedUp, setSignedUp] = useState();
  console.log(token)
  
  if(!token) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Login setToken={setToken} signedUp={signedUp} setSignedUp={setSignedUp}/>}/>
          <Route path="/sign-up" element={<SignUp setSignedUp={setSignedUp}/>}/>
          <Route path="/*" element={<Home/>}/>
        </Routes>
      </Router>
    )
  } else {
    return (
      <div className='app'>
        <Router>
        <div className="dashboard-wrapper">
              <SideBar 
                token={token} 
                setToken={setToken}
              />


                  <Routes>
                    <Route path="/user/:id/" element={<Dashboard/>}/>
                    <Route path="/user/:id/groups" element={<Groups/>}/>
                    <Route path="/user/:id/groups/:groupId/" element={<GroupsDashboard/>}/>
                    <Route path="/user/:id/expenses" element={<Expenses/>}/>
                    <Route path="/user/:id/expenses?category=:categoryId" element={<Expenses/>}/>
                    <Route path="/user/:id/groups/:groupId/expenses" element={<Expenses/>}/>
                    <Route path="/user/:id/groups/:groupId/expenses?category=:categoryId" element={<Expenses/>}/>
                    <Route path="/user/:id/friends" element={<Friends/>}/>
                    <Route path="/*" element={<Error/>}/>
                  </Routes>
                          
              </div>

        </Router>
        
      </div>
    );
  }
}

export default App;
