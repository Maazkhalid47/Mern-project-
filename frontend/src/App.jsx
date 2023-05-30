import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Sign_Up from './pages/SignUp/Sign_Up';
import NotFound from './pages/NotFound/NotFound';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard/Dashboard';
import Sidebar from './components/Sidebar';
import Addactivity from './components/AddActivity';

const App = () => {
  let token = localStorage.getItem("Token")
  console.log(token)
  return (
      

    <Router>
    {/* <Sidebar> */}
    {
    token==null?
    <>
      <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Sign_Up />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Login />} />
    </Routes>
    </>
    :
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/addActivity" element={<Addactivity />} />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
    }
    {/* </Sidebar> */}
    </Router>




  )
}


export default App;