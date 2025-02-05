import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if the user is authenticated on app load
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={isAuthenticated ? (<TaskList />) : ( <Navigate to="/login" /> ) } />
        <Route path="/add" element={isAuthenticated ? ( <AddTask />) : ( <Navigate to="/login" />) } />
        <Route path="/login" element={ !isAuthenticated ? ( <Login setIsAuthenticated={setIsAuthenticated} />) : (<Navigate to="/" /> ) }/>
        <Route path="/register" element={ !isAuthenticated ? (<Register />) : (<Navigate to="/" />)}/>
      </Routes>
    </Router>
  );
};

export default App;