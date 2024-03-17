import React from "react";
import './styles.scss'

interface Props{
    image: any,
    title: string,
    description: string,
}
 export const Collage: React.FC<Props> = ({ image, title, description }) => {
    return(
        <div className = 'collage'>
            {image}
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
 }