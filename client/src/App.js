import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom"
import SignUp from './components/SignUp';
import Login from './components/Login';
import Error from './components/Error';
import { ToastContainer } from 'react-toastify'
import HomePage from './components/HomePage';
import Admin from './components/Admin';
import EditUser from './components/EditUser';

function App(props) {
  return (
    <div>
    <ToastContainer />
      <Navbar />
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/signUp/update/:id" element={<EditUser />} />
        <Route path="*" element={<Error />} />

      </Routes>
    </div>
  );
}

export default App;