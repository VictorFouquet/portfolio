import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Sections from './components/Sections/Sections';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Sections />
    </div>
  );
}

export default App;
