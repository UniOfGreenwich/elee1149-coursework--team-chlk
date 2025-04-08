import "./App.css";
import "./styles/dashboard.css";
import { ToastContainer } from "react-toastify";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { SignUp } from "./pages/sign-up";
import { Error } from "./pages/error";
import { Dashboard } from "./pages/dashboard";
import { Groups } from "./pages/groups";
import { GroupsDashboard } from "./pages/groups-dashboard";
import { Expenses } from "./pages/expenses";
import { Friends } from "./pages/friends";
import useToken from "./methods/use-token";
import { SideBar } from "./components/dashboard-sidebar";

function App() {
  const { token, setToken } = useToken();

    return (
      <div className="app">
        <ToastContainer/>
        {!token ?
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login setToken={setToken}/>} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/*" element={<Home />} />
            </Routes>
          </Router> :
          
          <div className="dashboard-wrapper">
            <Router>
            <SideBar token={token} setToken={setToken} />
            <Routes>
              <Route path="/" element={<Dashboard userId={token.userId}/>} />
              <Route path="/groups" element={<Groups userId={token.userId}/>} />
              <Route path="/groups/:groupId/" element={<GroupsDashboard userId={token.userId}/>} />
              <Route path="/expenses" element={<Expenses userId={token.userId}/>} />
              <Route path="/expenses/category/:categoryId" element={<Expenses userId={token.userId}/>} />
              <Route path="/groups/:groupId/expenses" element={<Expenses userId={token.userId}/>} />
              <Route path="/groups/:groupId/expenses/category/:categoryId" element={<Expenses userId={token.userId}/>} />
              <Route path="/friends" element={<Friends userId={token.userId}/>} />
              <Route path="/*" element={<Error />} />
            </Routes>
            </Router>
          </div>
        
      } 
      </div>
    )
}

export default App;
