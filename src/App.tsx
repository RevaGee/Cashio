import React from 'react';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import DarkMode from "./components/DarkMode/DarkMode";

function App() {
  return (
      <div style={{width: "100%", margin:"0 auto"}} className="App">
        <Header/>
        <div style={{backgroundColor: "red", height: "300px", width: "90%", margin:"0 auto"}}></div>
        <div style={{backgroundColor: "transparent", height: "300px", width: "90%", margin:"0 auto"}}></div>
        <div style={{backgroundColor: "yellow", height: "300px", width: "90%", margin:"0 auto"}}></div>
        <div style={{backgroundColor: "transparent", height: "300px", width: "90%", margin:"0 auto"}}></div>
        <div style={{backgroundColor: "blue", height: "300px", width: "90%", margin:"0 auto"}}></div>
        <div style={{backgroundColor: "transparent", height: "300px", width: "90%", margin:"0 auto"}}></div>
        <div style={{backgroundColor: "red", height: "300px", width: "90%", margin:"0 auto"}}></div>
        <div style={{backgroundColor: "transparent", height: "300px", width: "90%", margin:"0 auto"}}></div>
        <div style={{backgroundColor: "yellow", height: "300px", width: "90%", margin:"0 auto"}}></div>
        <div style={{backgroundColor: "transparent", height: "300px", width: "90%", margin:"0 auto"}}></div>
        <div style={{backgroundColor: "blue", height: "300px", width: "90%", margin:"0 auto"}}></div>
        <div style={{backgroundColor: "transparent", height: "300px", width: "90%", margin:"0 auto"}}></div>
            <Footer/>
      </div>
  );
}

export default App;
