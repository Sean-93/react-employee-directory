import React from "react";
import "./App.css";
import Manager from "./components/manager";
import Engineer from "./components/engineer";
import JuniorEngineer from "./components/junior-engineer";
import Intern from "./components/intern";

function App() {
  return <div className="App">
    <div className="row">

    <div className="col-md-3">

  <Manager/>

    </div>

    <div className="col-md-3">
      
  <Engineer/>

    </div>

    <div className="col-md-3">

  <JuniorEngineer/>
      
    </div>

    <div className="col-md-3">
      
  <Intern/>

    </div>
    

    </div>

  </div>;
}

export default App;
