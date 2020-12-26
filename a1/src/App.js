import React from 'react';
import logo from './logo.svg';
import './App.css';

//Su dung Props cach 1

function Numberone(props){
  return(
    <div className="col-12">
      <div className="card">
        <img className="card-img-top" src={props.photo} alt=""></img>
        <div className="card-body">
          <h4 className="card-title">{props.tieude}</h4>
          <p className="card-text">Text</p>
        </div>
      </div>
    </div>  
  );
}

function One (){
  return(
    <div>
      <h1>Cach so 1</h1>
    </div>
  );
}

var Two = function(){
  return(
    <div>
      <h3>Cach so 2</h3>
    </div>
  );
}

var Three = () =>(
  <h4>Cach so 3</h4>
);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <One/>
        <Numberone tieude="san pham 1" photo="https://i-giaitri.vnecdn.net/2020/03/09/hong-nhung-top_380x228.jpg"/>
        <Numberone tieude="lion" photo="https://i-suckhoe.vnecdn.net/2020/03/10/benhviendachienCuChi-158381712-3978-3598-1583817127_500x300.jpg"/>
      </header>
        
        
    </div>
  );
}

export default App;
