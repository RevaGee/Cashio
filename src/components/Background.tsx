import React from "react";
import ParticlesComponent from "./Paralax/particles";

export const Background = () => {
    return(
        <div style={{width: "100%", height: "0", position:"absolute", zIndex: "-10"}}>
            <ParticlesComponent/>
        </div>
    )
}

