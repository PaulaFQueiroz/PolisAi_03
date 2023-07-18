import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';

// pages
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';

// components
import Navbar from './components/Navbar';

const theme = createTheme({


  
  palette: {
    primary: {
      light: '#7986cb',
      main: '#5c6bc0',
      dark: '#3f51b5'

    },
    secondary: {
      light: '#ffefbc',
      main: '#ffd966',
      dark: '#ffd042'

    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/login" element={<Login />} />
            </Routes>
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;




/*import React from 'react';
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


    

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';



// pages
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';

//components
import Navbar from './components/Navbar';

const theme = createTheme ({
  palette: {
    primary: {
    light: 'a33c9dc',
    main: 'a00bcd4',
    dark: 'a008394',
    contrastText: 'afff'
    },
    secondary: {
      light: 'aff6333',
      main: 'aff3d00',
      dark: 'ab22a00',
      contrastText: 'afff'
    }
  }
});


        function App() {
      return (
<ThemeProvider theme={theme}>
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
        </ThemeProvider>
       
      );
    }
    
    export default App;

    */