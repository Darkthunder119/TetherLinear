import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderNav from './HeaderNav/HeaderNav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <HeaderNav />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          G TESTING STUFF
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
