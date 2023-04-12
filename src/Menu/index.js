import React from 'react';
import './menu.css'


function Menu(props) {

    return (
        <div className='navcont'>
            <ul class="nav">
                <li><a href="#home">Home</a></li>
                <li><a href="#aboutme">About me</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#proyectos">Projects</a></li>
            </ul>
        </div>
    )
}

export { Menu }