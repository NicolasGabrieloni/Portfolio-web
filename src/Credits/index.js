import React from 'react';
import './credits.css';
import { SiGithub } from "react-icons/si";

function Credits(props) {

    return (
        <div className='containerCredits'>
            <h4 className='textC'>Developed by <a href='https://github.com/NicolasGabrieloni' ><SiGithub /> Nicolás Gabrieloni </a></h4>
        </div>
    )
}

export { Credits }