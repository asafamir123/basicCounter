import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from "./Components/Counter"
import {InfoCard} from "./Components/InfoCard"
function App() {
    console.log("hi dima")
  return (
    <div className="App">
        <Counter/>
        <InfoCard/>

   </div>
  );
}

export default App;
