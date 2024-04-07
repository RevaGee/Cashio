import React, { useEffect, useState, Suspense, lazy } from 'react';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import ArrowScroll from "./components/Arrow";
import { Slogan } from "./components/Slogan";
import { Collages } from "./components/Collages";
import { Questions } from "./components/Questions";
import { Contacts } from "./components/Contacts";
import './index.css'
import { Pricing } from "./components/Pricing";
import { AboutUs } from "./components/AboutUs";
import { ForWhom } from "./components/ForWhom";
import { Crm } from "./components/Crm";

// Lazy load ParticlesComponent
const ParticlesComponent = lazy(() => import("./components/Paralax/particles"));

function App() {
    return (
        <div style={{width: "100%", margin: "0 auto"}} className="App">
            <Suspense fallback={<div>Loading...</div>}>
                <ParticlesComponent/>
            </Suspense>
            <Header/>
            <Slogan/>
            <Crm/>
            <Collages/>
            <AboutUs/>
            <Pricing/>
            <Contacts/>
            <Questions/>
            <ArrowScroll/>
            <ForWhom/>
            <Footer/>
        </div>
    );
}

export default App;
