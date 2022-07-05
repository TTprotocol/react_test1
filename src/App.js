// import logo from './logo.svg';
import './App.css';
import React from 'react';
import ImportConponent from './R018'
// import Controllertest from './src/Controllers/test';

function App() {
  return (
    
    <div className="App">
      <h1>Start React 200</h1>
      <p>HTML 적용하기</p>
      <ImportConponent 
        String = "react"
        Number = {200}
        Boolean = {true}
        Array = {[0, 1, 8]}
        Object Json = {{react: "리액트", twoHundred:"200"}}
        Function = {console.log("functionprops : function!")}
      />
      {/* <Controllertest/> */}
    </div>
  );
}

export default App;
