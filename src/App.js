// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Import from "./R038";
import "bootstrap/dist/css/bootstrap.css";
//reactstrap 사용시 같이 improt 해주어야 한다.
// import Controllertest from './src/Controllers/test';

function App() {
    return (
        <div className="App">
            <h1>Start React 200</h1>
            <p>HTML 적용하기</p>
            <Import />
            {/* <Controllertest/> */}
        </div>
    );
}

export default App;
