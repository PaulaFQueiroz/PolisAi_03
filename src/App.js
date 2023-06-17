import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';



// pages
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';

//components
import Navbar from './components/Navbar';


        function App() {
      return (
  <div className="App">
    <Router>
        <Navbar />
        <div className='container'>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/login' element={<Login />} />
        </Routes>
        </div>
    </Router>
  </div>
       
      );
    }
    
    export default App;