import React from 'react';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";

function App() {
  return (
      <div style={{width: "90%", margin:"0 auto"}} className="App">
        <Header/>
        <div style={{backgroundColor: "red", height: "300px"}}></div>
        <div style={{backgroundColor: "transparent", height: "300px"}}></div>
        <div style={{backgroundColor: "yellow", height: "300px"}}></div>
        <div style={{backgroundColor: "transparent", height: "300px"}}></div>
        <div style={{backgroundColor: "blue", height: "300px"}}></div>
        <div style={{backgroundColor: "transparent", height: "300px"}}></div>
        <div style={{backgroundColor: "red", height: "300px"}}></div>
        <div style={{backgroundColor: "transparent", height: "300px"}}></div>
        <div style={{backgroundColor: "yellow", height: "300px"}}></div>
        <div style={{backgroundColor: "transparent", height: "300px"}}></div>
        <div style={{backgroundColor: "blue", height: "300px"}}></div>
        <div style={{backgroundColor: "transparent", height: "300px"}}></div>
            <Footer/>
      </div>
  );
}

export default App;
