import React from 'react';
import logo from './logo.svg';
import './App.css';
const a1 = "Huu";

function App1 (){
  return (
    <div>
      <h3>Then toi la: {a1}</h3>
    </div>
  );
}

//vi du ve ham map
const so = [1,2,3,4,5,6];
const so1 = so.map((x) => x*2 + ",");
const so2 = so.map((x) => (
  <li>So: {x}</li>
));


function App2 (){
  return(
    <div>
      {so2}
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Tu dong load luon khi go xong code
         Ung dung dau tien bang react js
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <App2/>
      </header>
    </div>
  );
}

export default App;
