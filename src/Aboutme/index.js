import React from 'react';
import './aboutme.css';
import MyImage from '../imagenes/me.jpg';
import 'aos/dist/aos.css';

function Aboutme(props) {
    return (
        <div className='aboutContainer' id='aboutme'>
            <h2 className='tittleAbout'>About me</h2>
            <div className='infoContainer'>
                <img src={MyImage} alt="Mi imagen" className='fotuki' data-aos="fade-right" />
                <div className='textContainer'>
                    <p>Mi nombre es Nicolás Gabrieloni, tengo 24 años. Actualmente resido en Santa fe - Argentina. <br></br><br></br>
                        Encuentro interés en todo lo que implique un desafío y una oportunidad de seguir aprendiendo y desarrollarme como profesional.<br></br><br></br>
                        Mi tecnologia favorita es React.js</p>
                </div>
            </div>
            <a href="../imagenes/cv.pdf" download><button className='cvBtn'>Descargar CV</button></a>
        </div>
    );
}

export { Aboutme };
