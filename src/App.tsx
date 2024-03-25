import React from 'react';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import ArrowScroll from "./components/Arrow";
import ParticlesComponent from "./components/Paralax/particles";
import {Slogan} from "./components/Slogan";
import {Collages} from "./components/Collages";
import {Questions} from "./components/Questions";
import {Contacts} from "./components/Contacts";
import './index.css'


function App() {
    return (
        <div style={{width: "100%", margin: "0 auto"}} className="App">
            <Header/>
            {/*<ParticlesComponent/>*/}
            <Slogan/>
            <Collages/>
            <Questions/>
            {/*<Contacts/>*/}
            {/*<div style={{backgroundColor: "blue", height: "300px", width: "90%", margin: "0 auto"}}></div>
            <div style={{backgroundColor: "transparent", height: "300px", width: "90%", margin: "0 auto"}}></div>*/}
            {/*<ArrowScroll/>
            <Footer/>*/}
        </div>
    );
}

export default App;
