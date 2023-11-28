import React from 'react';
import './Inicio.css';
import 'animate.css';



function Inicio(props) {

    return (
        <div className='initContainer' id='home'>
            <h2
                className={props.tittle1 ? "animate__animated animate__backInLeft" : "animate__animated animate__rotateOutDownLeft"}
                onMouseEnter={props.handletittle1Enter}
                onMouseLeave={props.handletittle1Leave}
            >
                HELLO <br></br>WORLD !
            </h2>

            <p
                className={props.tittle2 ? "animate__animated animate__backInRight" : "animate__animated animate__rotateOutDownRight"}
                onMouseEnter={props.handletittle2Enter}
                onMouseLeave={props.handletittle2Leave}
            >
                I'm a<br></br> Fullstack<br></br> developer
            </p>
        </div>
    )
}

export { Inicio }