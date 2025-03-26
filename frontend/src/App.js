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

import useToken from './components/use-token';

import { SideBar } from "./components/dashboard-sidebar";
import { TopBar } from "./components/dashboard-topbar";


function App() {
  const { token, setToken } = useToken();
  console.log(token)
  
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
  } else {
    return (
      <div className='app'>
        <Router>
        <div className="dashboard-wrapper">
              <SideBar 
                token={token} 
                setToken={setToken}
              />
              <div className="dashboard-content">
                <div className="topbar">
                  <TopBar pageName="Dashboard" />
                </div>

                  <Routes>
                    <Route path="/user/:id/" element={<Dashboard/>}/>
                    <Route path="/user/:id/Dashboard" element={<Dashboard/>}/>
                    <Route path="/user/:id/groups" element={<Groups/>}/>
                      <Route path="/user/:id/groups/:groupId/groups-dashboard" element={<GroupsDashboard/>}/>
                    <Route path="/user/:id/expenses" element={<Expenses/>}/>
                    <Route path="/user/:id/friends" element={<Friends/>}/>
                    <Route path="/*" element={<Error/>}/>
                  </Routes>
                          
              </div>
            </div>
        </Router>
        
      </div>
    );
  }
}

export default App;
